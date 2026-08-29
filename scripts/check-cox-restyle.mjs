import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const root = process.cwd();
const failures = [];

function fail(message) {
  failures.push(message);
}

const prior = {
  vendor: ["da", "ta", "dog"].join(""),
  account: ["Ac", "me"].join(""),
  aeFirst: ["Made", "line"].join(""),
  aeLast: ["Ingle", "by"].join(""),
  sev: ["Se", "v-2"].join(""),
  bits: ["Bi", "ts A", "I"].join(""),
  cookie: ["da", "ta", "dog", "_cro_session"].join(""),
  digest: ["da", "ta", "dog", "-cro"].join(""),
  domain: ["da", "ta", "dog", "hq"].join(""),
  force: ["da", "ta", "dog", ".lightning"].join(""),
  preview: ["da", "ta", "dog", "-grokbot"].join(""),
  project: ["da", "ta", "dog", "-cro"].join(""),
  fits: ["where-", "cursor-", "fits"].join(""),
  priya: ["Pri", "ya"].join(""),
  chris: ["Okonk", "wo"].join(""),
  jordan: ["Jordan", " Hale"].join(""),
  purple: ["632", "ca6"].join(""),
  purpleDark: ["4c1", "d82"].join(""),
  green: ["6eb", "e49"].join(""),
  greenDark: ["3d6", "b28"].join(""),
  purpleRgb: ["99, 44, ", "166"].join(""),
  heard: ["What we", " heard"].join(""),
  invoice: ["INV-00", "80"].join(""),
  ddVar: ["--dd", "-h"].join(""),
  ddClass: ["brand-", "dd"].join(""),
  padPng: ["watercolor-pad", ".png"].join(""),
  orbitPng: ["watercolor-orbit", ".png"].join(""),
};

const banned = Object.values(prior).map(
  (value) => new RegExp(value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
);

const skipDirs = new Set([
  "node_modules",
  ".next",
  ".git",
  "coverage",
  "out",
  "build",
  ".vercel",
]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const full = join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walk(full, files);
      continue;
    }
    files.push(full);
  }
  return files;
}

const files = walk(root);
const textExt = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".css",
  ".wgsl",
  ".svg",
  ".html",
  ".txt",
  ".example",
]);

function extOf(file) {
  const base = file.split("/").pop() || "";
  const idx = base.lastIndexOf(".");
  if (idx === -1) return "";
  return base.slice(idx);
}

for (const file of files) {
  const rel = relative(root, file);
  if (rel === "scripts/check-cox-restyle.mjs") continue;
  const ext = extOf(file);
  if (!textExt.has(ext) && ext !== "") continue;
  if (ext === "" && !file.endsWith(".env.example")) continue;
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  for (const pattern of banned) {
    if (pattern.test(text)) {
      fail(`${rel} still matches a prior-customer pattern`);
      break;
    }
  }
}

const authored = files.filter((file) => {
  const rel = relative(root, file);
  if (rel.split(sep).includes("quotes.ts")) return false;
  if (!/\.(ts|tsx|md|css|mjs|json)$/.test(rel)) return false;
  if (rel.startsWith("package-lock")) return false;
  return true;
});

const emDash = String.fromCharCode(8212);

for (const file of authored) {
  const rel = relative(root, file);
  const text = readFileSync(file, "utf8");
  if (text.includes(emDash)) {
    fail(`${rel} has an em dash in authored copy`);
  }
}

function mustInclude(file, snippet, label) {
  const full = join(root, file);
  if (!existsSync(full)) {
    fail(`missing ${file}`);
    return;
  }
  const text = readFileSync(full, "utf8");
  if (!text.includes(snippet)) {
    fail(`${label} missing from ${file}`);
  }
}

mustInclude(
  "src/app/(protected)/page.tsx",
  "Biz Eshetu",
  "Cox footer name",
);
mustInclude(
  "src/app/(protected)/page.tsx",
  "biz.eshetu@cursor.com",
  "Cox footer email",
);
mustInclude(
  "src/app/(protected)/page.tsx",
  "<HeroDemo",
  "HeroDemo integration",
);
mustInclude(
  "src/components/HeroDemo.tsx",
  "Agents for every Cox seller",
  "hero eyebrow",
);
mustInclude(
  "src/components/HeroDemo.tsx",
  "The agents that work while your reps sell.",
  "hero headline",
);
mustInclude(
  "src/components/HeroDemo.tsx",
  "Work starts it. Not another prompt.",
  "hero intro",
);
mustInclude("src/components/HeroDemo.tsx", "HERO_JOBS", "HeroDemo jobs table");
mustInclude("src/data/hero-jobs.ts", "export const HERO_JOBS", "HERO_JOBS export");
mustInclude("src/app/globals.css", ".hero-phone", "hero phone frame");
mustInclude("src/app/globals.css", ".hero-bot-demo", "hero bot demo");
mustInclude("src/app/globals.css", ".hero-phone-jobs", "hero job pills");

const pageHero = readFileSync(join(root, "src/app/(protected)/page.tsx"), "utf8");
if (/<section className="hero"/.test(pageHero)) {
  fail("page.tsx still renders the hero section directly");
}

const heroDemo = existsSync(join(root, "src/components/HeroDemo.tsx"))
  ? readFileSync(join(root, "src/components/HeroDemo.tsx"), "utf8")
  : "";
const heroSelectors = [
  "hero-phone",
  "hero-bot-demo",
  "hero-phone-jobs",
  "hero-phone-notch",
  "hero-phone-header",
  "hero-phone-back",
  "hero-phone-agent",
  "hero-phone-desktop",
  "hero-phone-thread",
  "hero-phone-work",
  "hero-phone-work-label",
  "hero-phone-work-meta",
  "hero-phone-work-copy",
  "hero-phone-message",
  "hero-phone-composer",
];
for (const selector of heroSelectors) {
  if (!heroDemo.includes(selector)) {
    fail(`HeroDemo missing ${selector}`);
  }
}

const heroJobs = existsSync(join(root, "src/data/hero-jobs.ts"))
  ? readFileSync(join(root, "src/data/hero-jobs.ts"), "utf8")
  : "";
const heroLabels = [
  "Sales Outbound",
  "Account Research",
  "Call Follow-up",
  "Deal Desk",
  "Pipeline Health",
  "Renewal Risk",
  "Competitive Intel",
  "Sales Chief of Staff",
];
for (const label of heroLabels) {
  if (!heroJobs.includes(label)) {
    fail(`hero job ${label} missing from src/data/hero-jobs.ts`);
  }
}
const heroIdCount = (heroJobs.match(/id: "[^"]+"/g) || []).length;
if (heroIdCount !== 8) {
  fail(`expected 8 hero jobs, found ${heroIdCount}`);
}
mustInclude(
  "src/components/BrandLockup.tsx",
  "https://www.coxautoinc.com/wp-content/uploads/2025/09/primary_117d9b.svg",
  "official Cox wordmark URL",
);
mustInclude("src/app/globals.css", "--brand-h: 15px", "15px lockup");
mustInclude("src/app/globals.css", "--brand-h: 17px", "17px lockup");
mustInclude(
  "public/brand/wordmark.txt",
  "https://www.coxautoinc.com/wp-content/uploads/2025/09/primary_117d9b.svg",
  "wordmark provenance URL",
);
mustInclude(
  "public/brand/wordmark.txt",
  "no generated-text fallback",
  "wordmark provenance fallback note",
);

if (!existsSync(join(root, "src"))) {
  fail("src/ app tree is missing");
}

const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
if (pkg.dependencies?.geist !== "^1.7.2") {
  fail("geist must stay ^1.7.2");
}
if (pkg.dependencies?.vgpu !== "^0.3.1") {
  fail("vgpu must stay ^0.3.1");
}
if (pkg.dependencies?.next !== "15.5.24") {
  fail("next must stay exactly 15.5.24");
}

const localMarks = files.filter((file) => {
  const rel = relative(root, file).toLowerCase();
  if (!rel.startsWith("public/")) return false;
  return /cox/.test(rel) && /wordmark|logo/.test(rel);
});
if (localMarks.length) {
  fail("local Cox wordmark or logo file is not allowed");
}

if (existsSync(join(root, "public/brand/cox-wordmark.svg"))) {
  fail("local fake Cox wordmark is not allowed");
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Cox restyle checks passed");
