#!/usr/bin/env bash
# ==============================================================================
# AllLogic Online — Script Oficial de Build e Deploy do Agillex Site
# Portal Oficial: agillex.com.br
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🚀 Iniciando build e sincronização do Agillex Site (agillex.com.br)..."

# 1. Build local
npm run build

# 2. Sincronizar com GitHub
if git status --porcelain | grep -q .; then
  echo "📦 Criando commit das alterações..."
  git add .
  git commit -m "chore(deploy): publicacao automatizada do agillex.com.br"
fi

echo "📤 Enviando código para o GitHub..."
git push origin main

# 3. Deploy na VPS de Produção (136.248.113.145)
SSH_KEY="$HOME/.ssh/ssh-key-2026-07-03.key"
VPS_HOST="dresler@136.248.113.145"

if [ -f "$SSH_KEY" ]; then
  echo "🚀 Atualizando container em produção na VPS..."
  ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$VPS_HOST" "
    cd /home/dresler/agillex-site &&
    git pull origin main &&
    docker compose up -d --build agillex-site
  "
  echo "✅ Deploy em produção concluído com sucesso!"
fi

echo ""
echo "🎉 PORTAL AGILLEX PUBLICADO!"
echo "👉 Site: https://agillex.com.br"
echo "👉 WWW: https://www.agillex.com.br"
