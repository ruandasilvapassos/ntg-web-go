#!/usr/bin/env node
const fs = require('fs');
const { spawnSync} = require('child_process');

// # GET Each Localization
const spawnES = spawnSync('npx', ['flat', 'src/shared/locales/es.json'], {
  shell: true
});
const spawnEN = spawnSync('npx', ['flat', 'src/shared/locales/en.json'], {
  shell: true
});

// # Flat Each JSON object
const Flatten_ES = spawnES.stdout?.toString()
const Flatten_EN = spawnEN.stdout?.toString()

// # Out
fs.writeFileSync('src/shared/locales/out/es.json', Flatten_ES);
fs.writeFileSync('src/shared/locales/out/en.json', Flatten_EN);