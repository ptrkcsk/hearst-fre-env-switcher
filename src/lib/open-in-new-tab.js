/**
 * @param {string} url
 * @return {void}
 */
export default function openInNewTab (url) {
  window.chrome.tabs.create({ url })
}
