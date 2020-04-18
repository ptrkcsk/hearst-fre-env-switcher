const tldExtract = require('tld-extract').parse_host

/**
 * @param {string} hostname
 * @return {string}
 */
module.exports = function getTld (hostname) {
  return tldExtract(hostname).tld
}
