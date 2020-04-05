/**
 * @return {Promise<Tab>}
 */
export default async function getActiveTab () {
  return new Promise(function (resolve) {
    window.chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true
      },
      ([tab]) => resolve(tab)
    )
  })
}
