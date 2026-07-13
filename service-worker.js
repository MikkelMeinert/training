/* Offline app shell for the In-Season Training app.
   Strategy:
   - HTML (the app): network-first, so you get the latest block when online,
     falling back to the cached copy when offline.
   - Static assets (icons, manifest): cache-first.
   Bump CACHE when you redeploy a new program so old caches are cleared. */
const CACHE = "training-v5";
const ASSETS = [
  "training.html",
  "manifest.webmanifest",
  "icon-180.png",
  "icon-192.png",
  "icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const isHTML =
    req.mode === "navigate" ||
    (req.headers.get("accept") || "").includes("text/html");

  if (isHTML) {
    // network-first for the app page
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("training.html", copy));
          return res;
        })
        .catch(() => caches.match("training.html").then((r) => r || caches.match(req)))
    );
    return;
  }

  // cache-first for static assets
  e.respondWith(
    caches.match(req).then((cached) =>
      cached ||
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      }).catch(() => cached)
    )
  );
});
