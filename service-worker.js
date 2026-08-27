const CACHE_NAME = "noetic-cache-v5";

const APP_SHELL = [
  "./",
  "./index.html",

  "./manifest.json",
  "./favicon.jpeg",

  "./seed.js",
  "./storage.js",
  "./vault.js",
  "./streak.js",
  "./daily.js",
  "./cards.js",
  "./modals.js",
  "./userState.js",

  "./base.css",
  "./theme.css",
  "./cards.css",
  "./navbar.css",
  "./modal.css"
];


/* =========================================
   INSTALL
========================================= */

self.addEventListener("install", event => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log("Caching app shell...");
        return cache.addAll(APP_SHELL);
      })
      .catch(error => {
        console.error("Cache failed:", error);
      })
  );
});


/* =========================================
   ACTIVATE
========================================= */

self.addEventListener("activate", event => {
  self.clients.claim();

  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});


/* =========================================
   FETCH
========================================= */

self.addEventListener("fetch", event => {

  /* Ignore non-GET requests */
  if (event.request.method !== "GET") return;

  event.respondWith(

    caches.match(event.request)
      .then(cachedResponse => {

        /* Return cached file if available */
        if (cachedResponse) {
          return cachedResponse;
        }

        /* Otherwise fetch from network */
        return fetch(event.request)
          .then(networkResponse => {

            /* Clone response */
            const responseClone = networkResponse.clone();

            /* Save new requests dynamically */
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseClone);
              });

            return networkResponse;

          });

      })
      .catch(() => {

        /* Offline fallback for page navigation */
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }

      })

  );

});
