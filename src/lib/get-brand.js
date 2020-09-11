import splitHostname from './split-hostname'

/**
 * @param {string} url
 * @return {string}
 */
export default function getBrand (url) {
  const { hostname } = new URL(url)
  const { tld } = splitHostname(hostname)
  let remove

  if (hostname.endsWith('hearstapps.net')) {
    remove = /(-\d+)?\.(kube)?(feature|stage)\.hearstapps\.net/
  } else {
    remove = `.${tld}`
  }

  return hostname
    .replace(remove, '')
    .replace(/^www\./, '')
}
