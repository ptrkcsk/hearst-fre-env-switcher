import { parse_host as tldExtract } from 'tld-extract'

/**
 * @param {string} hostname
 * @return {string}
 */
export default function getTld (hostname) {
  return tldExtract(hostname).tld
}
