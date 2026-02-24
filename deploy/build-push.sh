#!/usr/bin/env bash
set -euo pipefail

IMAGE="krishans1990/krishan-run"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

# Optional tag override: ./build-push.sh v1.2.0
TAG="${1:-}"
SHA="$(git -C "$PROJECT_ROOT" rev-parse --short HEAD)"

if ! command -v docker &>/dev/null; then
  echo "Error: docker is not installed or not in PATH" >&2
  exit 1
fi

TAGS=("$IMAGE:latest" "$IMAGE:$SHA")
if [[ -n "$TAG" ]]; then
  TAGS+=("$IMAGE:$TAG")
fi

TAG_FLAGS=()
for t in "${TAGS[@]}"; do
  TAG_FLAGS+=(-t "$t")
done

echo "Building ${TAGS[*]} ..."
docker build -f "$SCRIPT_DIR/Dockerfile" "${TAG_FLAGS[@]}" "$PROJECT_ROOT"

for t in "${TAGS[@]}"; do
  echo "Pushing $t ..."
  docker push "$t"
done

echo "Done."
