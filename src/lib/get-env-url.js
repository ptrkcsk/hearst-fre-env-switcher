import getBrand from './get-brand'
import brandTlds from './brand-tlds'

/**
 * @param {string} env
 * @param {string} url
 * @return {string}
 */
export default function getEnvUrl (env, url) {
  const brand = getBrand(url)
  url = new URL(url)

  url.protocol = 'https://'

  if (env === 'feature') {
    url.hostname = `${brand}.feature.hearstapps.net`
  } else if (env === 'local') {
    url.hostname = `${brand}.fre-hdm.docker`
    url.protocol = 'http://'
  } else if (env === 'prod') {
    url.hostname = `${brand}.${brandTlds[brand]}`
  } else if (env === 'stage') {
    url.hostname = `${brand}.stage.hearstapps.net`
  } else if (/^\d+$/.test(env)) {
    // `env` is a PR number
    url.hostname = `${brand}-${env}.feature.hearstapps.net`
  } else {
    throw new Error(`Unexpected environment '${env}'`)
  }

  return url.toString()
}
