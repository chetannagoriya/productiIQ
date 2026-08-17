import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("creates a deployable Next.js production build", async () => {
  await access(new URL("../.next/BUILD_ID", import.meta.url));
  const [page, layout] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(layout, /ProductIQ AI/);
  assert.match(page, /Catalog quality/);
  assert.match(page, /New project/);
  assert.match(page, /Search products, models, catalogs/);
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
