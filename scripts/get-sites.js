#!/usr/bin/env node

const fs = require('fs')
const got = require('got')
const tldExtract = require('tld-extract').parse_host

async function getSites () {
  const { body } = await got(
    process.env.GRAPHQL_ENDPOINT,
    {
      allowGetBody: true,
      json: {
        query: '{ sites(first: 9999) { domain } }'
      }
    }
  )
  let { data: { sites } } = JSON.parse(body)

  sites = sites
    .map(({ domain }) => domain)
    .reduce(function (uniqueSites, site) {
      // Skip empty sites
      if (site.length < 1) return uniqueSites

      const { tld } = tldExtract(site)
      const hostnameWithoutTld = site.replace(`.${tld}`, '')

      if ([
        'cosmopolitan',
        'elle',
        'hearst',
        'marieclaire'
      ].includes(hostnameWithoutTld)) {
        // These brands have multiple TLDs, but we only want '{brand}.com'
        if (tld !== 'com') return uniqueSites
      }

      return uniqueSites.concat(site)
    }, [])

  return [...new Set(sites.sort())]
}

function save (sites) {
  fs.writeFileSync(`${__dirname}/../src/lib/sites.json`, JSON.stringify(sites))
}

async function main () {
  save(await getSites())
}

main().catch(console.error)
