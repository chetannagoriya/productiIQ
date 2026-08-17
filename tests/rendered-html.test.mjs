import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the ProductIQ application", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /<title>ProductIQ AI/);
  assert.match(html, /Catalog quality/);
  assert.match(html, /New project/);
  assert.match(html, /Search products, models, catalogs/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("ships the main interactive workflows", async () => {
  const [page, shortcut, data] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/hooks/use-search-shortcut.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/lib/product-data.ts", import.meta.url), "utf8"),
  ]);
  assert.match(shortcut, /addEventListener\("keydown"/);
  assert.match(shortcut, /searchInput\.current\?\.focus/);
  assert.match(data, /export interface Product/);
  assert.match(page, /setProjectOpen\(true\)/);
  assert.match(page, /Generate product intelligence/);
  assert.match(page, /setView\("products"\)/);
});
