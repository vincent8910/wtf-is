const CACHE_NAME = 'wtf-is-v2';

// 核心資源：app shell
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js',
];

// 資料資源：搜尋索引（較常更新）
const DATA_ASSETS = [
  './terms-index.json',
  './terms-content.json',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 資料檔案：stale-while-revalidate（先回快取，背景更新）
  if (url.pathname.endsWith('.json') && (
    url.pathname.includes('terms-index') ||
    url.pathname.includes('terms-content') ||
    url.pathname.includes('terms.json')
  )) {
    event.respondWith(staleWhileRevalidate(event.request));
    return;
  }

  // 其他資源：network first, fallback to cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);

  // 背景更新
  const fetchPromise = fetch(request).then(response => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  // 有快取就先回傳，沒有就等網路
  return cached || fetchPromise;
}
