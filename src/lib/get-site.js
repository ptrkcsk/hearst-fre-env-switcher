import getTld from './get-tld'

/**
 * @param {string} url
 * @return {string}
 */
export default function getSite (url) {
  const { hostname } = new URL(url)
  const tld = getTld(hostname)
  let remove

  if (hostname.endsWith('hearstapps.net')) {
    remove = /(-\d+)?\.kube(feature|stage)\.hearstapps\.net/
  } else {
    remove = `.${tld}`
  }

  return hostname.replace(remove, '')
}
