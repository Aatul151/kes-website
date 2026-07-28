import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { getPrerenderRoutes, getSeoForPath, SITE_URL } from "../src/seo/routeSeo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");

function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function updateHead(html, seo) {
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const canonicalUrl = `${SITE_URL}${seo.path}`;

  return html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/s,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/s,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content=".*?" \/>/s,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/s,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
    .replace(
      /<meta name="twitter:title" content=".*?" \/>/s,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content=".*?" \/>/s,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?" \/>/s,
      `<link rel="canonical" href="${canonicalUrl}" />`,
    );
}

async function loadBlogPosts() {
  const contentModule = await import(
    pathToFileURL(path.join(rootDir, "public", "content.js")).href
  );
  return contentModule.BLOG_POSTS || [];
}

async function main() {
  const [baseHtml, blogPosts] = await Promise.all([
    fs.readFile(path.join(distDir, "index.html"), "utf8"),
    loadBlogPosts(),
  ]);

  const routes = getPrerenderRoutes(blogPosts);

  await Promise.all(
    routes.map(async (routePath) => {
      if (routePath === "/") return;

      const seo = getSeoForPath(routePath, blogPosts);
      const pageHtml = updateHead(baseHtml, seo);
      const outputDir = path.join(distDir, routePath.replace(/^\//, ""));

      await fs.mkdir(outputDir, { recursive: true });
      await fs.writeFile(path.join(outputDir, "index.html"), pageHtml, "utf8");
    }),
  );
}

main().catch((error) => {
  console.error("Failed to generate route HTML:", error);
  process.exitCode = 1;
});
