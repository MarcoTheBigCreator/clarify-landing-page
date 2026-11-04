import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const baseUrl = process.env.SMOKE_BASE_URL || 'http://127.0.0.1:3000';
const request = (path, headers = {}) => fetch(new URL(path, baseUrl), {
  redirect: 'manual',
  headers,
  signal: AbortSignal.timeout(15_000),
});

for (const locale of ['es', 'en']) {
  test(`${locale} renders matching language, translations and metadata`, async () => {
    const messages = JSON.parse(await readFile(`src/locales/${locale}.json`, 'utf8'));
    const response = await request('/' + locale);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${locale}"`));
    assert.ok(html.includes(`name="description" content="${messages.description}"`));
    assert.ok(html.includes(messages.footer.description));
    assert.ok(html.includes('Cambiar idioma a ' + (locale === 'en' ? 'ES' : 'EN')));
  });

  test(`${locale} unknown pages retain a localized 404`, async () => {
    const messages = JSON.parse(await readFile(`src/locales/${locale}.json`, 'utf8'));
    const response = await request('/' + locale + '/page-that-does-not-exist');
    assert.equal(response.status, 404);
    assert.ok((await response.text()).includes(messages.notFound.description));
  });
}

for (const [name, headers, expectedLocale] of [
  ['default locale', {}, 'es'],
  ['browser language', { 'Accept-Language': 'en-US,en;q=0.9' }, 'en'],
  ['saved language preference', { Cookie: 'NEXT_LOCALE=en', 'Accept-Language': 'es' }, 'en'],
]) {
  test(`root redirect respects ${name}`, async () => {
    const response = await request('/', headers);
    assert.equal(response.status, 307);
    const location = new URL(response.headers.get('location'), baseUrl);
    assert.equal(location.origin, new URL(baseUrl).origin);
    assert.equal(location.pathname, '/' + expectedLocale);
  });
}

test('unsupported locales return 404', async () => {
  const response = await request('/fr');
  assert.equal(response.status, 404);
  await response.arrayBuffer();
});

test('compiled JavaScript and CSS are available', async () => {
  const response = await request('/en');
  const html = await response.text();
  const assets = [...html.matchAll(/(?:src|href)="([^" ]+\.(?:js|css)(?:\?[^" ]*)?)"/g)]
    .map((match) => match[1])
    .filter((path) => path.startsWith('/_next/'));
  for (const extension of ['.js', '.css']) {
    const path = assets.find((path) => path.includes(extension));
    assert.ok(path, `missing ${extension} asset`);
    const asset = await request(path);
    assert.equal(asset.status, 200);
    assert.ok((await asset.arrayBuffer()).byteLength > 0);
  }
});
