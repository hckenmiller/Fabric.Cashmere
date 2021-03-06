#!/usr/bin/env bash

if [ -z "$1"  ]; then
    echo "Must pass package version as first argument"
    exit 1
fi

# Grab package version set by semantic release
PACKAGE_VERSION=$1

# Replace package.json version with generated version
sed -i -E "s/(\"version\":[[:space:]]*\").+(\")/\1${PACKAGE_VERSION}\2/g" package.json

# Update package-lock.json version also
# todo: someone with more sed experience use the script above but only replace the first occurence
npm install --package-lock-only
