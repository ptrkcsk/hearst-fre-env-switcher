#!/usr/bin/env node

const fs = require('fs')
const got = require('got')

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

  return [
    ...new Set(
      sites.map(({ domain }) => domain)
        .filter(site => site.length > 0)
        .sort()
    )
  ]
}

function save (sites) {
  fs.writeFileSync(`${__dirname}/../src/lib/sites.json`, JSON.stringify(sites))
}

async function main () {
  save(await getSites())
}

main().catch(console.error)
