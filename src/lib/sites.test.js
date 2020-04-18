const sites = require('./sites.json')
const tlds = Object.keys(require('tld-extract/effective_tld_names.json'))

const endsInTld = new RegExp(`${tlds.join('|')}$`)

describe('sites', function () {
  for (const site of sites) {
    test(`${site} ends in a valid TLD`, function () {
      expect(site).toMatch(endsInTld)
    })
  }
})

