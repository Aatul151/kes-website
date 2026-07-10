import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** Project root (one level above /services) */
const ROOT = path.resolve(__dirname, "..");
const PROJECTS_DIR = path.join(ROOT, "public", "images", "projects");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tiff"]);

/**
 * Build an SVG overlay with repeating diagonal "KES" watermarks.
 * @param {number} width
 * @param {number} height
 * @param {{ text?: string, opacity?: number }} [options]
 */
function createWatermarkSvg(width, height, options = {}) {
  const text = options.text ?? "KES";
  const opacity = options.opacity ?? 0.12;
  const fontSize = Math.max(22, Math.round(Math.min(width, height) * 0.055));

  // Spacing between repeated marks (in rotated space)
  const stepX = Math.round(fontSize * 5.5);
  const stepY = Math.round(fontSize * 3.2);

  // Cover the full image after rotation — expand bounds so corners aren't empty
  const diagonal = Math.ceil(Math.hypot(width, height));
  const start = -diagonal;
  const end = diagonal;

  const marks = [];
  let row = 0;
  for (let y = start; y <= end; y += stepY) {
    const offsetX = row % 2 === 0 ? 0 : stepX / 2; // stagger alternate rows
    for (let x = start + offsetX; x <= end; x += stepX) {
      marks.push(
        `<text class="wm" x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle">${text}</text>`
      );
    }
    row += 1;
  }

  return Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .wm {
          fill: #C8102E;
          fill-opacity: ${opacity};
          font-family: Arial, Helvetica, sans-serif;
          font-size: ${fontSize}px;
          font-weight: 800;
          letter-spacing: 0.18em;
        }
      </style>
      <g transform="translate(${width / 2}, ${height / 2}) rotate(-32)">
        ${marks.join("\n        ")}
      </g>
    </svg>
  `);
}

/**
 * Build output path with `_wmk` suffix before the extension.
 * e.g. arc7_metals.webp → arc7_metals_wmk.webp
 * @param {string} inputPath
 */
function withWmkSuffix(inputPath) {
  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const base = path.basename(inputPath, ext);
  if (base.endsWith("_wmk")) return path.join(dir, `${base}${ext}`);
  return path.join(dir, `${base}_wmk${ext}`);
}

/**
 * Watermark a single image and write a new `_wmk` file (originals are kept).
 * @param {string} inputPath Absolute or relative path to the image
 * @param {{
 *   outputPath?: string,
 *   text?: string,
 *   opacity?: number,
 * }} [options]
 * @returns {Promise<{ input: string, output: string, width: number, height: number }>}
 */
export async function watermarkImage(inputPath, options = {}) {
  const resolvedInput = path.resolve(inputPath);
  const outputPath = options.outputPath
    ? path.resolve(options.outputPath)
    : withWmkSuffix(resolvedInput);

  const image = sharp(resolvedInput);
  const metadata = await image.metadata();
  const width = metadata.width;
  const height = metadata.height;

  if (!width || !height) {
    throw new Error(`Could not read dimensions for: ${resolvedInput}`);
  }

  const watermark = createWatermarkSvg(width, height, {
    text: options.text,
    opacity: options.opacity,
  });

  // Same resolution — only re-encode smarter (strip metadata, higher effort).
  // Metadata is dropped by default in sharp output, which also shrinks files.
  const pipeline = sharp(resolvedInput, { failOn: "none" })
    .rotate() // apply EXIF orientation, then strip orientation tag
    .composite([{ input: watermark, top: 0, left: 0 }]);

  const ext = path.extname(outputPath).toLowerCase();
  let buffer;

  if (ext === ".webp" || metadata.format === "webp") {
    // effort 6 = max compression work; quality ~80 is usually visually same as 85 for photos
    buffer = await pipeline
      .webp({
        quality: 80,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();
  } else if (ext === ".png" || metadata.format === "png") {
    buffer = await pipeline
      .png({
        compressionLevel: 9,
        effort: 10,
        palette: false, // keep full color clarity
      })
      .toBuffer();
  } else if (ext === ".avif" || metadata.format === "avif") {
    buffer = await pipeline
      .avif({
        quality: 72,
        effort: 6,
      })
      .toBuffer();
  } else {
    buffer = await pipeline
      .jpeg({
        quality: 82,
        mozjpeg: true,
        progressive: true,
        optimizeScans: true,
      })
      .toBuffer();
  }

  await fs.writeFile(outputPath, buffer);

  const inputStat = await fs.stat(resolvedInput);
  return {
    input: resolvedInput,
    output: outputPath,
    width,
    height,
    inputBytes: inputStat.size,
    outputBytes: buffer.length,
  };
}

/**
 * Watermark every image in public/images/projects.
 * @param {{
 *   dir?: string,
 *   text?: string,
 *   opacity?: number,
 * }} [options]
 */
export async function watermarkProjectsFolder(options = {}) {
  const dir = options.dir ? path.resolve(options.dir) : PROJECTS_DIR;

  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    throw new Error(`Projects folder not found: ${dir}\n${err.message}`);
  }

  const files = entries
    .filter((e) => {
      if (!e.isFile()) return false;
      const ext = path.extname(e.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.has(ext)) return false;
      // Skip already-watermarked outputs
      const base = path.basename(e.name, ext);
      return !base.endsWith("_wmk");
    })
    .map((e) => path.join(dir, e.name));

  if (files.length === 0) {
    console.log(`No images found in ${dir}`);
    return [];
  }

  console.log(`Watermarking ${files.length} image(s) in:\n  ${dir}\n`);

  const results = [];
  for (const file of files) {
    try {
      const result = await watermarkImage(file, {
        text: options.text ?? "KES",
        opacity: options.opacity ?? 0.12,
      });
      results.push(result);
      const saved = result.inputBytes - result.outputBytes;
      const savedLabel =
        saved > 0
          ? `saved ${(saved / 1024).toFixed(0)} KB`
          : `+${(Math.abs(saved) / 1024).toFixed(0)} KB`;
      console.log(
        `  ✓ ${path.basename(file)} → ${path.basename(result.output)} (${result.width}×${result.height}, ${savedLabel})`
      );
    } catch (err) {
      console.error(`  ✗ ${path.basename(file)} — ${err.message}`);
    }
  }

  console.log(`\nDone. ${results.length}/${files.length} watermarked.`);
  return results;
}

// Run when executed directly: node service.js
const isDirectRun =
  process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename);

if (isDirectRun) {
  watermarkProjectsFolder().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
