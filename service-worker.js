const CACHE_NAME = "buddhikosh-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",

  // CSS
  "./css/base.css",
  "./css/cards.css",
  "./css/navbar.css",
  "./css/modal.css",
  "./css/theme.css",

  // JS
  "./js/cards.js",
  "./js/modals.js",
  "./js/vault.js",
  "./js/seed.js",

  // Data files
  "./js/data/laws.js",
  "./js/data/psychology.js",
  "./js/data/philosophy.js",
  "./js/data/mentalModels.js",
  "./js/data/powerDark.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
