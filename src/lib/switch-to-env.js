/**
 * @param {string} env
 * @param {string} url
 * @return {string}
 */
function getEnvUrl (env, url) {
  const site = getSite(url)
  url = new URL(url)

  if (env === 'feature') {
    url.hostname = `${site}.kubefeature.hearstapps.net`
  } else if (env === 'local') {
    url.hostname = `${site}.fre-hdm.docker`
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

/**
 * @param {string} url
 * @return {string}
 */
function getSite (url) {
  const hostnameParts = new URL(url).hostname.split('.').reverse()
  const tld = hostnameParts[0]

  if (tld === 'com') return hostnameParts[1]
  if (tld === 'docker') return hostnameParts[2]
  if (tld === 'net') return hostnameParts[3].replace(/-\d+/, '')

  throw new Error(`Can't determine site from URL '${url}'`)
}

/**
 * @param {string} env
 * @return {Promise<void>}
 */
export default async function switchToEnv (env) {
  return new Promise(function (resolve) {
    window.chrome.tabs.query({ active: true }, function ([tab]) {
      window.chrome.tabs.update({
        url: getEnvUrl(env, tab.url)
      })

      resolve()
    })
  })
}
