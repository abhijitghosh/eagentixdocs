#!/usr/bin/env bash
# One-command docs deploy: build VitePress → rsync to Hostinger over SSH key → verify.
#
# Auth uses the existing SSH keypair (~/.ssh/id_rsa registered in hPanel).
#
# Target subdomain: doc.eagentix.com
# Document root: domains/eagentix.com/public_html/doc
#
# Usage:
#   bash deploy_docs.sh             # build + deploy
#   bash deploy_docs.sh --no-build  # deploy existing dist/

set -euo pipefail

SSH_USER="u610665342"
SSH_HOST="147.93.78.230"
SSH_PORT="65002"
REMOTE_ROOT="domains/eagentix.com/public_html/doc"
SITE="https://doc.eagentix.com"

RSH="ssh -p $SSH_PORT -o BatchMode=yes -o StrictHostKeyChecking=accept-new"

cd "$(dirname "$0")"

# ── 1. Build ─────────────────────────────────────────────────────────────────
if [ "${1:-}" != "--no-build" ]; then
  echo "==> Building VitePress documentation site..."
  npm run docs:build
fi

DIST="docs/.vitepress/dist"
[ -f "$DIST/index.html" ] || { echo "✗ $DIST/index.html missing — build failed?"; exit 1; }

echo "==> Verifying remote directory on Hostinger..."
# Check or create directory if not exists
$RSH "$SSH_USER@$SSH_HOST" "mkdir -p $REMOTE_ROOT" \
  || { echo "✗ SSH failed to create/verify $REMOTE_ROOT on server"; exit 1; }

# ── 2. Upload — hashed assets FIRST, index.html LAST ─────────────────────────
echo "==> Uploading static assets..."
rsync -az --delete -e "$RSH" "$DIST/assets/" "$SSH_USER@$SSH_HOST:$REMOTE_ROOT/assets/"

echo "==> Uploading remaining pages & assets..."
rsync -az -e "$RSH" --exclude 'assets' --exclude 'index.html' "$DIST/" "$SSH_USER@$SSH_HOST:$REMOTE_ROOT/"

echo "==> Flipping index.html..."
rsync -az -e "$RSH" "$DIST/index.html" "$SSH_USER@$SSH_HOST:$REMOTE_ROOT/index.html"

echo "✔ Successfully deployed docs to $SITE!"
