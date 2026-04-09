#!/usr/bin/env bash
set -euo pipefail

# ── Config ──────────────────────────────────────────────
SSH_HOST="tuaiti@admin.tuaiti.com.ar"
SSH_PORT=5447
REMOTE_DOCROOT="/home/tuaiti/public_html"
REMOTE_API_DIR="${REMOTE_DOCROOT}/api"
SSH_CMD="ssh -p ${SSH_PORT} ${SSH_HOST}"

# ── Colors ──────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info()  { echo -e "${GREEN}[deploy]${NC} $1"; }
warn()  { echo -e "${YELLOW}[deploy]${NC} $1"; }
error() { echo -e "${RED}[deploy]${NC} $1"; exit 1; }

# ── Parse args ──────────────────────────────────────────
DEPLOY_FRONTEND=false
DEPLOY_BACKEND=false
SKIP_BUILD=false
SKIP_CHECKS=false
DRY_RUN=false

usage() {
  cat <<EOF
Usage: ./deploy.sh [options]

Options:
  --frontend    Deploy frontend (build + upload dist/)
  --backend     Deploy backend (upload backend/api/)
  --all         Deploy both frontend and backend
  --skip-build   Skip npm build (upload existing dist/)
  --skip-checks  Skip lint and tests
  --dry-run      Show what would be transferred without uploading
  -h, --help    Show this help

Examples:
  ./deploy.sh --all            # Build and deploy everything
  ./deploy.sh --frontend       # Build and deploy frontend only
  ./deploy.sh --backend        # Deploy backend only
  ./deploy.sh --all --dry-run  # Preview what would be deployed
EOF
  exit 0
}

if [[ $# -eq 0 ]]; then
  usage
fi

while [[ $# -gt 0 ]]; do
  case "$1" in
    --frontend)    DEPLOY_FRONTEND=true ;;
    --backend)     DEPLOY_BACKEND=true ;;
    --all)         DEPLOY_FRONTEND=true; DEPLOY_BACKEND=true ;;
    --skip-build)  SKIP_BUILD=true ;;
    --skip-checks) SKIP_CHECKS=true ;;
    --dry-run)     DRY_RUN=true ;;
    -h|--help)     usage ;;
    *)             error "Unknown option: $1" ;;
  esac
  shift
done

RSYNC_OPTS="-avz --delete -e 'ssh -p ${SSH_PORT}'"
if $DRY_RUN; then
  RSYNC_OPTS="--dry-run ${RSYNC_OPTS}"
fi

# ── Pre-checks ──────────────────────────────────────────
command -v rsync >/dev/null 2>&1 || error "rsync is required"
command -v npm >/dev/null 2>&1   || error "npm is required"

# ── Checks ──────────────────────────────────────────────
if $DEPLOY_FRONTEND && ! $SKIP_BUILD && ! $SKIP_CHECKS; then
  info "Running lint..."
  npm run lint || error "Lint failed — fix errors before deploying"

  info "Running tests..."
  npm run test || error "Tests failed — fix errors before deploying"
fi

# ── Frontend ────────────────────────────────────────────
if $DEPLOY_FRONTEND; then
  if ! $SKIP_BUILD; then
    info "Building frontend..."
    npm run build || error "Build failed"
  fi

  [[ -d dist ]] || error "dist/ directory not found. Run npm run build first."

  info "Deploying frontend to ${REMOTE_DOCROOT}..."
  eval rsync ${RSYNC_OPTS} \
    --exclude='api/' \
    --exclude='stats/' \
    --exclude='monitors/' \
    --exclude='scripts/' \
    --exclude='img/' \
    --exclude='demo/' \
    --exclude='remoto/' \
    --exclude='tools/' \
    dist/ "${SSH_HOST}:${REMOTE_DOCROOT}/"

  info "Frontend deployed."
fi

# ── Backend ─────────────────────────────────────────────
if $DEPLOY_BACKEND; then
  [[ -f backend/api/contact.php ]] || error "backend/api/contact.php not found"

  info "Deploying backend to ${REMOTE_API_DIR}..."
  eval rsync ${RSYNC_OPTS} \
    --exclude='config.php' \
    backend/api/ "${SSH_HOST}:${REMOTE_API_DIR}/"

  info "Backend deployed (config.php preserved on server)."
fi

# ── Done ────────────────────────────────────────────────
if $DRY_RUN; then
  warn "Dry run complete — no files were transferred."
else
  info "Deploy complete."
fi
