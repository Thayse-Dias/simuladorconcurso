self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("simulado-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./css/style.css",
        "./js/script.js",
        "./js/questions.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
