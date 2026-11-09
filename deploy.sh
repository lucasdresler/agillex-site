#!/usr/bin/env bash
# ==============================================================================
# AllLogic Online — Script Oficial de Build e Deploy do Agillex Site
# Portal Oficial: agillex.com.br
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🚀 Iniciando build de produção do Agillex Site (agillex.com.br)..."

# 1. Build estático otimizado
npm run build

echo "✅ Build local concluído com sucesso!"

# 2. Sincronizar com o repositório remoto GitHub
if git status --porcelain | grep -q .; then
  echo "📦 Detectadas alterações locais não comitadas. Criando commit..."
  git add .
  git commit -m "chore(deploy): atualizacao de producao do portal agillex.com.br"
fi

echo "📤 Enviando alterações para o GitHub (origin main)..."
git push origin main

echo ""
echo "🎉 DEPLOY DISPARADO COM SUCESSO!"
echo "👉 Repositório: https://github.com/lucasdresler/agillex-site"
echo "👉 O Cloudflare Pages detecta o push e publica no edge global em ~15 segundos."
