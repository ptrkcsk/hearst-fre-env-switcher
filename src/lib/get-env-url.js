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
    url.hostname = `${brand}.kubefeature.hearstapps.net`
  } else if (env === 'local') {
    url.hostname = `${brand}.fre-hdm.docker`
    url.protocol = 'http://'
  } else if (env === 'prod') {
    url.hostname = `${brand}.${brandTlds[brand]}`
  } else if (env === 'stage') {
    url.hostname = `${brand}.kubestage.hearstapps.net`
  } else if (/^\d+$/.test(env)) {
    url.hostname = `${brand}-${env}.kubefeature.hearstapps.net`
  } else {
    throw new Error(`Unexpected environment '${env}'`)
  }

  return url.toString()
}
