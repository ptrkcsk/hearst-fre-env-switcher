const sites = require('./sites.json')
const getTld = require('./get-tld')

module.exports = function getSiteTlds () {
  return [...new Set(sites.map(getTld).sort())]
}
