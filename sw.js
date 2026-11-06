const C='cm-v1',F=['index.html','manifest.json','icons/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(u.origin===location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
