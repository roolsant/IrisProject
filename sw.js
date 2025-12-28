const CACHE_NAME = 'caca-cores-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './img/titulo_game.png',
  './img/lente_camera.png',
  './img/mascote_intro.png',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/stickers/sticker_aquarela.png',
  './img/stickers/sticker_arcoiris.png',
  './img/stickers/sticker_cachorrinho.png',
  './img/stickers/sticker_caminhao_bombeiro.png',
  './img/stickers/sticker_estrela.png',
  './img/stickers/sticker_flor.png',
  './img/stickers/sticker_frutas.png',
  './img/stickers/sticker_gatinho.png',
  './img/stickers/sticker_giz.png',
  './img/stickers/sticker_morango.png',
  './img/stickers/sticker_polvo.png',
  './img/stickers/sticker_porquinho.png',
  './img/stickers/sticker_sapo.png',
  './img/stickers/sticker_sol.png',
  './img/stickers/sticker_sorvete.png',
  './img/stickers/sticker_tigre.png'
];

// Instala o Service Worker e baixa os arquivos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Serve os arquivos do cache quando estiver offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});