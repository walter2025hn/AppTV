# Código Master (AppTV)
App de TV, películas y series para móvil y Android TV. Lista: https://tinyurl.com/codesmaster

- Animación de águila al iniciar, UI ligera (solo CSS transform/opacity, carga perezosa, 120 ítems por página).
- Motores: hls.js, mpegts.js y reproductor nativo, con cambio automático si falla (botón "Motor").
- Control remoto (flechas, Atrás) y táctil.

## APK
Cada push ejecuta GitHub Actions → descarga `CodigoMaster-APK` en la pestaña Actions.
Local: `npm install && npm run prep && npx cap add android && npx cap sync && cd android && ./gradlew assembleDebug`

## Imágenes
- Canales: logos de iptv-org (se buscan por nombre). Películas/series: carátulas de TMDB.
- Para películas/series pon tu clave gratis de https://www.themoviedb.org/settings/api en `TMDB_KEY` (inicio de `index.html`), o en la app con el botón 🖼️.
- Se piden solo al ver cada tarjeta y se guardan en caché. Si no hay imagen, se muestra una tarjeta con iniciales.
