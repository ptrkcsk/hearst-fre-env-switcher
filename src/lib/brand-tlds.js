import sites from './sites.json'
import splitHostname from './split-hostname'

const brandTlds = {}

for (const site of sites) {
  const { hostnameWithoutTld, tld } = splitHostname(site)

  const existing = brandTlds[hostnameWithoutTld]

  if (existing) {
    throw new Error(
      `'${hostnameWithoutTld}' brand TLD already set to '.${existing}'`
    )
  }

  brandTlds[hostnameWithoutTld] = tld
}

export default brandTlds
