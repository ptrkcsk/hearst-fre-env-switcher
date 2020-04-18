import getTld from './get-tld'
import sites from './sites.json'

export default function getSiteTlds () {
  return [...new Set(sites.map(getTld).sort())]
}
