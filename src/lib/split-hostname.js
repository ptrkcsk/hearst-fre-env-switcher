import tlds from './site-tlds.json'

tlds.push('fre-hdm.docker', 'net')

const endsWithSiteTld = new RegExp(`(${tlds.join('|')})$`)

/**
 * @param {string} hostname
 * @return {object}
 */
export default function splitHostname (hostname) {
  const [tld] = hostname.match(endsWithSiteTld)

  if (!tld) throw new Error(`Unexpected TLD in hostname '${hostname}'`)

  const hostnameWithoutTld = hostname.replace(`.${tld}`, '')

  return { hostnameWithoutTld, tld }
}
