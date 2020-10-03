/**
 * @param {string} url
 * @return {void}
 */
import getActiveTab from './get-active-tab'

export default async function openInCurrentTab (url) {
  const {id: tabId} = await getActiveTab()

  window.chrome.tabs.update(tabId, { url })
}
