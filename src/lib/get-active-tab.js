/**
 * @return {Promise<Tab>}
 */
export default async function getActiveTab () {
  return new Promise(function (resolve) {
    window.chrome.tabs.query({ active: true }, ([tab]) => resolve(tab))
  })
}
