/**
 * @param {string} env
 * @param {string} site
 * @return {string}
 */
function getEnvUrl (env, site) {
  if (env === 'feature') return `https://${site}.kubefeature.hearstapps.net`
  if (env === 'local') return `http://${site}.fre-hdm.docker`
  if (env === 'prod') return `https://${site}.com`
  if (env === 'stage') return `https://${site}.kubestage.hearstapps.net`
  if (/^\d+$/.test(env)) return `https://${site}-${env}.kubefeature.hearstapps.net`

  throw new Error(`Unexpected environment '${env}'`)
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
        url: getEnvUrl(env, getSite(tab.url))
      })

      resolve()
    })
  })
}
