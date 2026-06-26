import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = "https://kesprojects.com/Video/Steel2.mp4";
const dest = path.join(__dirname, "..", "public", "videos", "hero", "home.mp4");

fs.mkdirSync(path.dirname(dest), { recursive: true });

async function download() {
  let start = 0;
  if (fs.existsSync(dest)) {
    start = fs.statSync(dest).size;
    console.log(`Resuming from ${start} bytes`);
  }

  const headers = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    Accept: "video/mp4,video/*;q=0.9,*/*;q=0.8",
    Referer: "https://kesprojects.com/",
  };
  if (start > 0) headers.Range = `bytes=${start}-`;

  const res = await fetch(url, { headers, redirect: "follow" });
  if (!res.ok && res.status !== 206) {
    throw new Error(`HTTP ${res.status}`);
  }

  const expected = Number(res.headers.get("content-length") || 0);
  const total = res.status === 206 ? start + expected : expected;
  console.log(`Status ${res.status}, downloading ${expected} bytes (total ~${total})`);

  const file = fs.createWriteStream(dest, { flags: start > 0 ? "a" : "w" });
  const reader = res.body.getReader();
  let received = start;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    file.write(Buffer.from(value));
    received += value.length;
    if (received % 500000 < value.length) {
      process.stdout.write(`\r${received} / ${total || "?"} bytes`);
    }
  }

  await new Promise((resolve, reject) => file.end((err) => (err ? reject(err) : resolve())));
  console.log(`\nSaved ${dest} (${fs.statSync(dest).size} bytes)`);
}

download().catch((err) => {
  console.error(err);
  process.exit(1);
});
