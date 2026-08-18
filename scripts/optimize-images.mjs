import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const pub = path.join(root, "public");

const jobs = [
  { file: "hydrogen-renewables-hero.png", max: 1600, quality: 74 },
  { file: "technology-hero-electrolyzer.png", max: 1600, quality: 74 },
  { file: "images/products/products-hero.jpg", max: 1600, quality: 74 },
  { file: "images/technology/enhanced_catalyst.png", max: 900, quality: 72 },
  { file: "images/technology/enhanced_cell.png", max: 900, quality: 72 },
  { file: "images/technology/enhanced_mea.png", max: 900, quality: 72 },
  { file: "images/technology/enhanced_ptl.png", max: 900, quality: 72 },
  { file: "images/technology/prod_electrolyzer_hq.png", max: 1200, quality: 74 },
  { file: "images/technology/prod_electrolyzer_hq_clean.png", max: 1200, quality: 74 },
  { file: "images/technology/roadmap-seawater-v2.jpg", max: 1000, quality: 74 },
  { file: "images/technology/roadmap-vessels.jpg", max: 1000, quality: 74 },
  { file: "est-solution-ceo.png", max: 900, quality: 74 },
  { file: "est-solution-logo-transparent.png", max: 440, quality: 80 },
  { file: "product-stack-2-5kw.png", max: 1000, quality: 74 },
  { file: "product-stack-5kw.png", max: 1000, quality: 74 },
  { file: "product-stack-20kw.png", max: 1000, quality: 74 },
  { file: "field-demonstration-wide.jpg", max: 1400, quality: 74 },
  { file: "field-demonstration.jpg", max: 1100, quality: 74 },
  { file: "hydrogen-prototype.jpg", max: 1100, quality: 74 },
  { file: "images/products/neohyd-station.jpg", max: 1200, quality: 74 },
  { file: "images/products/application-mobility.jpg", max: 1000, quality: 74 },
  { file: "images/products/application-remote-sites.jpg", max: 1000, quality: 74 },
  { file: "images/products/application-data-centers.jpg", max: 1000, quality: 74 },
  { file: "park_seojin_circle_v4.png", max: 360, quality: 78 },
  { file: "kim_dongho_circle_final.png", max: 320, quality: 78 },
  { file: "kim-dongho-portrait.png", max: 400, quality: 76 },
  { file: "park-seojin-portrait.png", max: 400, quality: 76 },
  { file: "ti-ptl-diagram.png", max: 900, quality: 76 },
  { file: "diag_pem.png", max: 360, quality: 76 },
  { file: "diag_aec.png", max: 360, quality: 76 },
  { file: "diag_aem.png", max: 360, quality: 76 },
  { file: "diag_soec.png", max: 360, quality: 76 },
  { file: "assets/company/cert1_venture_inspect.png", max: 800, quality: 76 },
  { file: "assets/company/cert2_demo_inspect.png", max: 800, quality: 76 },
  { file: "assets/company/cert3_energy_inspect.png", max: 800, quality: 76 },
  { file: "assets/company/cert4_penguin_inspect.png", max: 800, quality: 76 },
];

function pngToIco(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6);
  header.writeUInt8(32, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

let saved = 0;
let before = 0;
let after = 0;

for (const job of jobs) {
  const input = path.join(pub, job.file);
  const output = input.replace(/\.(png|jpe?g)$/i, ".webp");
  await mkdir(path.dirname(output), { recursive: true });
  const bytesIn = (await stat(input)).size;
  const meta = await sharp(input).metadata();
  const bytesOut = await sharp(input)
    .resize({ width: job.max, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 6 })
    .toFile(output)
    .then((info) => info.size);
  before += bytesIn;
  after += bytesOut;
  saved += bytesIn - bytesOut;
  console.log(`${job.file}  ${meta.width}x${meta.height}  ${(bytesIn / 1024).toFixed(0)}KB → ${(bytesOut / 1024).toFixed(0)}KB`);
}

const faviconPng = await sharp(path.join(pub, "favicon.svg")).resize(32, 32).png().toBuffer();
await writeFile(path.join(pub, "favicon.ico"), pngToIco(faviconPng));
console.log("wrote favicon.ico");
console.log(`total ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (saved ${(saved / 1024).toFixed(0)}KB)`);
