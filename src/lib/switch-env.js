import getActiveTab from './get-active-tab'
import getEnvUrl from './get-env-url'
import openInCurrentTab from './open-in-current-tab'
import openInNewTab from './open-in-new-tab'

/**
 * @param {object} params
 * @param {string} params.env
 * @param {boolean} [params.newTab]
 * @return {Promise<void>}
 */
export default async function switchEnv ({ env, newTab = false }) {
  const activeTab = await getActiveTab()

  if (!activeTab) return console.info(`Would switch to env '${env}'`)

  const open = newTab ? openInNewTab : openInCurrentTab
  const url = getEnvUrl(env, activeTab.url)

  open(url)
}
