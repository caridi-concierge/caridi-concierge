#!/usr/bin/env node
// IndexNow submission for caridiconcierge.com.
//
// IndexNow notifies participating search engines (Bing, Yandex, Naver, Seznam —
// NOT Google, which doesn't consume the protocol) when specific URLs change. It
// is a *changed-URL* notifier, not a sitemap re-ping: submit only the URLs that
// actually changed. Blanket-pinging every URL on every deploy is discouraged and
// can get throttled.
//
// Usage:
//   node scripts/indexnow.mjs <url-or-path> [<url-or-path> ...]   # explicit URLs
//   node scripts/indexnow.mjs                                     # derive from git diff
//   node scripts/indexnow.mjs --dry-run [...]                     # print, don't submit
//
// With no URL arguments, the script diffs changed content files against a base
// ref (env INDEXNOW_BASE, default HEAD~1) and maps the ones it can map cleanly
// (blog posts, treatment and location detail pages) to routes. Files it can't
// map confidently (sections, components, shared lib) are reported, not guessed —
// submit those URLs explicitly when you know what they affect.
//
// The IndexNow key is public by design (it's served at KEY_LOCATION). Override it
// per environment with INDEXNOW_KEY; the fallback must match the filename and
// contents of public/<key>.txt.

import { execSync } from "node:child_process";

const HOST = "www.caridiconcierge.com";
const KEY = process.env.INDEXNOW_KEY ?? "3e8f2820d34b2aac469265f64ea14304";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const ORIGIN = `https://${HOST}`;

// Map a changed repo file to the route(s) it affects. Returns [] when the file
// has no confident 1:1 route mapping.
function fileToUrls(file) {
  let m;

  // src/content/blog/<slug>.mdx -> /blog/<slug> (and the blog index)
  if ((m = file.match(/^src\/content\/blog\/([^/]+)\.mdx$/))) {
    return [`${ORIGIN}/blog/${m[1]}`, `${ORIGIN}/blog`];
  }

  // src/content/treatments/<slug>/... -> /treatments/<slug>
  // src/content/locations/<slug>/...  -> /locations/<slug>
  // Skip the entity's non-detail files (index.ts, types.ts, *.test.ts).
  if ((m = file.match(/^src\/content\/(treatments|locations)\/([^/]+)\//))) {
    const [, entity, slug] = m;
    if (["index.ts", "types.ts"].includes(slug) || slug.endsWith(".test.ts")) return [];
    return [`${ORIGIN}/${entity}/${slug}`];
  }

  return [];
}

// Normalize a CLI argument (full URL or path) to an absolute URL on this host.
function normalize(arg) {
  if (/^https?:\/\//.test(arg)) return arg;
  return `${ORIGIN}/${arg.replace(/^\/+/, "")}`;
}

function urlsFromGitDiff() {
  const base = process.env.INDEXNOW_BASE ?? "HEAD~1";
  const out = execSync(`git diff --name-only ${base} HEAD`, { encoding: "utf8" });
  const changed = out.split("\n").map((l) => l.trim()).filter(Boolean);

  const urls = new Set();
  const unmapped = [];
  for (const file of changed) {
    const mapped = fileToUrls(file);
    if (mapped.length) mapped.forEach((u) => urls.add(u));
    else if (file.startsWith("src/")) unmapped.push(file);
  }

  if (unmapped.length) {
    console.warn(
      `Skipped ${unmapped.length} changed source file(s) with no 1:1 route mapping ` +
        `(submit affected URLs explicitly if needed):`
    );
    for (const f of unmapped) console.warn(`  - ${f}`);
  }

  return [...urls];
}

async function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const urlArgs = args.filter((a) => a !== "--dry-run");

  const urls = urlArgs.length ? urlArgs.map(normalize) : urlsFromGitDiff();

  if (!urls.length) {
    console.log("IndexNow: no URLs to submit.");
    return;
  }

  console.log(`IndexNow: ${dryRun ? "would submit" : "submitting"} ${urls.length} URL(s):`);
  for (const u of urls) console.log(`  ${u}`);

  if (dryRun) return;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: urls }),
  });

  // IndexNow returns 200 (accepted) or 202 (received, pending validation) on
  // success. Anything else is a real failure — surface it loudly.
  if (res.status !== 200 && res.status !== 202) {
    const detail = await res.text().catch(() => "");
    throw new Error(`IndexNow submission failed: ${res.status} ${res.statusText} ${detail}`.trim());
  }

  console.log(`IndexNow: accepted (${res.status}).`);
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
