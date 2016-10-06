#!/bin/bash

# Kill node
printf "\n\nAttempting to kill node\n\n"
pid=$(ps aux | grep node | awk '{ print $2 }')
kill -9 $pid

# Wipe modules
printf "\n\nWiping modules\n\n"
rm -rf node_modules

# Install
printf "\n\nInstalling project\n\n"
npm install

# Build
printf "\n\nBuilding project\n\n"
npm run build

# Start
printf "\n\nStarting the server\n\n"
npm start
