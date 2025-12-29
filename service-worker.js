const CACHE_NAME = "noetic-cache-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",

  "./seed.js",
  "./vault.js",
  "./cards.js",
  "./daily.js",
  "./streak.js",

  "./base.css",
  "./cards.css",
  "./modal.css",
  "./navbar.css",
  "./theme.css"
];

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", event => {
  self.clients.claim();

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
      .catch(() => caches.match("./index.html"))
  );
});
