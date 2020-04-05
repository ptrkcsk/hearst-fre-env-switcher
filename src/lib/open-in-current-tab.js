/**
 * @param {string} url
 * @return {void}
 */
export default function openInCurrentTab (url) {
  window.chrome.tabs.update({ url })
}
