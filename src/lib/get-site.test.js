import getBrand from './get-brand'
import getSiteTlds from './get-site-tlds'

test.each([
  // From prod
  [
    getSiteTlds().map(tld => `https://brand-name.${tld}`),
    'brand-name'
  ],
  [
    getSiteTlds().map(tld => `https://subdomain.brand-name.${tld}`),
    'subdomain.brand-name'
  ],

  // From stage
  [
    ['https://brand-name.kubestage.hearstapps.net'],
    'brand-name'
  ],
  [
    ['https://subdomain.brand-name.kubestage.hearstapps.net'],
    'subdomain.brand-name'
  ],

  // From feature
  [
    ['https://brand-name.kubefeature.hearstapps.net'],
    'brand-name'
  ],
  [
    ['https://subdomain.brand-name.kubefeature.hearstapps.net'],
    'subdomain.brand-name'
  ],

  // From PR
  [
    ['https://brand-name-9999.kubefeature.hearstapps.net'],
    'brand-name'
  ],
  [
    ['https://subdomain.brand-name-9999.kubefeature.hearstapps.net'],
    'subdomain.brand-name'
  ],

  // From local
  [
    ['htts://brand-name.docker'],
    'brand-name'
  ],
  [
    ['http://subdomain.brand-name.docker'],
    'subdomain.brand-name'
  ],
])('getBrand', function (urls, expected) {
  for (const url of urls) {
    expect(getBrand(url)).toBe(expected)
  }
})
