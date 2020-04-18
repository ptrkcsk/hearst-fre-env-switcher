#!/usr/bin/env node

const fs = require('fs')
const sites = require('../src/lib/sites.json')
const tldExtract = require('tld-extract').parse_host

function getSiteTlds () {
  return [...new Set(sites.map(site => tldExtract(site).tld).sort())]
}

function save (tlds) {
  fs.writeFileSync(`${__dirname}/../src/lib/site-tlds.json`, JSON.stringify(tlds))
}

async function main () {
  save(getSiteTlds())
}

main().catch(console.error)
