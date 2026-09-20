const CACHE_NAME = 'viana-v5';
const ASSETS = [
  './login.html',
  './index.html',
  './pagamento.html',
  './manifest.json',
  './img/logo_oficial.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});