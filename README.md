# Código Master (AppTV)
App de TV, películas y series para móvil y Android TV. Lista: https://tinyurl.com/codesmaster

- Animación de águila al iniciar, UI ligera (solo CSS transform/opacity, carga perezosa, 120 ítems por página).
- Motores: hls.js, mpegts.js y reproductor nativo, con cambio automático si falla (botón "Motor").
- Control remoto (flechas, Atrás) y táctil.

## APK
Cada push ejecuta GitHub Actions → descarga `CodigoMaster-APK` en la pestaña Actions.
Local: `npm install && npm run prep && npx cap add android && npx cap sync && cd android && ./gradlew assembleDebug`
