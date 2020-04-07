import getSite from './get-site'

/**
 * @param {string} env
 * @param {string} url
 * @return {string}
 */
export default function getEnvUrl (env, url) {
  const site = getSite(url)
  url = new URL(url)

  if (env === 'feature') {
    url.hostname = `${site}.kubefeature.hearstapps.net`
  } else if (env === 'local') {
    url.hostname = `${site}.fre-hdm.docker`
    url.protocol = 'http://'
  } else if (env === 'prod') {
    url.hostname = `${site}.com`
  } else if (env === 'stage') {
    url.hostname = `${site}.kubestage.hearstapps.net`
  } else if (/^\d+$/.test(env)) {
    url.hostname = `${site}-${env}.kubefeature.hearstapps.net`
  } else {
    throw new Error(`Unexpected environment '${env}'`)
  }

  return url.toString()
}
