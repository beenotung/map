#!/bin/bash
set -e
set -o pipefail

if [ $# != 1 ]; then
  echo >&2 "Error: missing dirname in argument."
  echo >&2 "Example: $0 tests/02-math"
  exit 1
fi

mkdir -p "$1"

while true; do
  read -p "test name (empty to stop): " name
  if [ "$name" == "" ]; then
    echo "end"
    break
  fi
  vim "$1/$name.in.php"
  vim "$1/$name.out.php"
done
