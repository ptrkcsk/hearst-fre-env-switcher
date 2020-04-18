import getBrand from './get-brand'
import siteTlds from './site-tlds.json'

test.each([
  // From prod
  [
    siteTlds.map(tld => `https://www.brand-name.${tld}`),
    'brand-name'
  ],
  [
    siteTlds.map(tld => `https://www.subdomain.brand-name.${tld}`),
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
