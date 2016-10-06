#!/bin/bash

# Kill node
pid=$(ps aux | grep node | awk '{ print $2 }')
kill -9 $pid

# Wipe modules
rm -rf node_modules

# Write a message
echo "Hey man" >> deploy.log

# Install
npm install
npm run build
npm start
