const CACHE_NAME = 'flap-of-despair-cache-v1';
const urlsToCache = [
  // 1. Caminho Raiz e Arquivos Principais
  '/Flap-of-Despair/', 
  '/Flap-of-Despair/index.html',
  '/Flap-of-Despair/manifest.json',
  '/Flap-of-Despair/service-worker.js',

  // 2. Páginas HTML do Jogo
  '/Flap-of-Despair/ato1.html',
  '/Flap-of-Despair/ato2.html',
  '/Flap-of-Despair/ato3.html',
  '/Flap-of-Despair/bearover.html',
  '/Flap-of-Despair/codigos.html',
  '/Flap-of-Despair/comentarios.html',
  '/Flap-of-Despair/franklin.html',
  '/Flap-of-Despair/gameover.html',
  '/Flap-of-Despair/maisie.html',
  '/Flap-of-Despair/selecao.html',

  // 3. Arquivos de Script e Ícones
  '/Flap-of-Despair/gameover_handler.js',
  '/Flap-of-Despair/favicon-192.png',
  '/Flap-of-Despair/favicon-519.png' 
  // ⚠️ ATENÇÃO: Se tiver arquivos CSS, outras imagens ou outros JS, adicione-os aqui!
];

// O restante do código do Service Worker:
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
