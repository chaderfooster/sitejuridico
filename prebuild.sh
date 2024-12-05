#!/bin/bash
# Força o uso do Node.js 20.x
export NODE_VERSION=20.0.0
nvm install $NODE_VERSION
nvm use $NODE_VERSION
node --version
npm --version
