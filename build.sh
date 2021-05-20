#!/bin/sh

rm -fr dist/
mkdir -p dist/
cp -R site/* dist/

npm run build