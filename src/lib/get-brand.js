import { default as tlds } from './site-tlds.json'

tlds.push('docker', 'net')

const endsWithTld = new RegExp(`(${tlds.join('|')})$`)

function getTld (url) {
  return url.match(endsWithTld)[0]
}

/**
 * @param {string} url
 * @return {string}
 */
export default function getBrand (url) {
  const { hostname } = new URL(url)
  const tld = getTld(hostname)
  let remove

  if (hostname.endsWith('hearstapps.net')) {
    remove = /(-\d+)?\.kube(feature|stage)\.hearstapps\.net/
  } else {
    remove = `.${tld}`
  }

  return hostname
    .replace(remove, '')
    .replace(/^www\./, '')
}
