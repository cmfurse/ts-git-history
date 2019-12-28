#!/usr/bin/env bash

rm -rf ./build/
tsc --sourceMap false
mkdir -p ./build/public/react/
cd ./src/public/react
npm run build
cp -r build/* ../../../build/public/react/
