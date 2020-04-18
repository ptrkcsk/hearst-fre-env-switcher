#!/usr/bin/env node

const getSiteTlds = require('../src/lib/get-site-tlds')

console.log('Site TLDs:')
console.log(getSiteTlds().join(', '))
