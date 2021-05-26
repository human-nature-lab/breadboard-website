#!/bin/sh

rm -fr dist/
mkdir -p dist/
cp -R site/* dist/

npx vuepress build docs