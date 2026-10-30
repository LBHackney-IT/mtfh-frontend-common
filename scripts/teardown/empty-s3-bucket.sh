#!/usr/bin/env bash
# Permanently deletes every object version and delete marker in a versioned S3 bucket,
# so that `terraform destroy` can remove the bucket (it has no force_destroy).
set -euo pipefail

bucket="${1:?Usage: empty-s3-bucket.sh <bucket-name>}"

if ! head_err="$(aws s3api head-bucket --bucket "$bucket" 2>&1)"; then
  if printf '%s' "$head_err" | grep -Eq '404|Not Found|NoSuchBucket'; then
    echo "Bucket $bucket does not exist, nothing to empty."
    exit 0
  fi
  echo "Unable to access bucket $bucket:" >&2
  printf '%s\n' "$head_err" >&2
  exit 1
fi

batch_file="$(mktemp)"
trap 'rm -f "$batch_file"' EXIT

deleted=0
while true; do
  # MaxKeys counts versions and delete markers together, keeping each batch within the
  # 1000-key limit of DeleteObjects.
  aws s3api list-object-versions \
    --bucket "$bucket" \
    --max-keys 1000 \
    --no-paginate \
    --output json \
    --query '{Objects: [Versions, DeleteMarkers][].{Key: Key, VersionId: VersionId}, Quiet: `true`}' \
    > "$batch_file"

  count="$(jq '.Objects // [] | length' "$batch_file")"
  if [ "$count" -eq 0 ]; then
    break
  fi

  errors="$(aws s3api delete-objects --bucket "$bucket" --delete "file://$batch_file" --output json --query 'Errors')"
  if [ -n "$errors" ] && [ "$errors" != "null" ] && [ "$errors" != "[]" ]; then
    echo "Failed to delete some objects from $bucket:" >&2
    echo "$errors" >&2
    exit 1
  fi

  deleted=$((deleted + count))
  echo "Deleted $deleted object versions from $bucket so far."
done

echo "Bucket $bucket is empty ($deleted object versions deleted)."
