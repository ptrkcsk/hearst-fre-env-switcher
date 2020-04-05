/**
 * @param {string} url
 * @return {string}
 */
export default function getSite (url) {
  const hostnameParts = new URL(url).hostname.split('.').reverse()
  const tld = hostnameParts[0]

  if (tld === 'com') return hostnameParts[1]
  if (tld === 'docker') return hostnameParts[2]
  if (tld === 'net') return hostnameParts[3].replace(/-\d+/, '')

  throw new Error(`Can't determine site from URL '${url}'`)
}
