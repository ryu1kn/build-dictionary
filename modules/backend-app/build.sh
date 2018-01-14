#!/bin/bash

set -euo pipefail

SRC_DIR=./src
DIST_DIR=./__dist

mkdir -p $DIST_DIR
cp -r $SRC_DIR/package.json $SRC_DIR/index.js $DIST_DIR
(cd $DIST_DIR && yarn install --production)
