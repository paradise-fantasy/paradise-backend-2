#!/bin/bash

# Kill node
echo "Attempting to kill node"
pid=$(ps aux | grep node | awk '{ print $2 }')
kill -9 $pid

# Wipe modules
echo "Wiping modules"
rm -rf node_modules

# Install
echo "Installing project"
npm install

# Build
echo "Building project"
npm run build

# Start
echo "Starting the server"
npm start
