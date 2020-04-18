import getSite from './get-site'
import getSiteTlds from './get-site-tlds'

test.each([
  // From prod
  [
    getSiteTlds().map(tld => `https://site.${tld}`),
    'site'
  ],
  [
    getSiteTlds().map(tld => `https://subdomain.site.${tld}`),
    'subdomain.site'
  ],

  // From stage
  [
    ['https://site.kubestage.hearstapps.net'],
    'site'
  ],
  [
    ['https://subdomain.site.kubestage.hearstapps.net'],
    'subdomain.site'
  ],

  // From feature
  [
    ['https://site.kubefeature.hearstapps.net'],
    'site'
  ],
  [
    ['https://subdomain.site.kubefeature.hearstapps.net'],
    'subdomain.site'
  ],

  // From PR
  [
    ['https://site-9999.kubefeature.hearstapps.net'],
    'site'
  ],
  [
    ['https://subdomain.site-9999.kubefeature.hearstapps.net'],
    'subdomain.site'
  ],

  // From local
  [
    ['htts://site.docker'],
    'site'
  ],
  [
    ['http://subdomain.site.docker'],
    'subdomain.site'
  ],
])('getSite', function (urls, expected) {
  for (const url of urls) {
    expect(getSite(url)).toBe(expected)
  }
})
