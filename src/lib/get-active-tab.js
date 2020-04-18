/**
 * @return {Promise<Tab|void>}
 */
export default async function getActiveTab () {
  return new Promise(function (resolve) {
    if (!window.chrome.tabs) {
      return resolve()
    }

    window.chrome.tabs.query(
      {
        active: true,
        lastFocusedWindow: true
      },
      ([tab]) => resolve(tab)
    )
  })
}
