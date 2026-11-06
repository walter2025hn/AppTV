#!/bin/bash
# Uso: ./push.sh TU_USUARIO_GITHUB
git init -b main && git add . && git commit -m "Código Master: primera versión"
git remote add origin https://github.com/$1/AppTV.git && git push -u origin main
