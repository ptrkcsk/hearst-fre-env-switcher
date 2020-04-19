import getBrand from './get-brand'
import siteTlds from './site-tlds.json'

describe('getBrand', function () {
  describe('from prod', function () {
    describe('without subdomain', function () {
      const tlds = siteTlds.map(tld => `https://www.brand-name.${tld}`)

      for (const tld of tlds) {
        test(`getBrand(${tld})`, function () {
          expect(getBrand(tld)).toBe('brand-name')
        })
      }
    })

    describe('with subdomain', function () {
      const tlds = siteTlds.map(tld => `https://www.subdomain.brand-name.${tld}`)

      for (const tld of tlds) {
        test(`getBrand(${tld})`, function () {
          expect(getBrand(tld)).toBe('subdomain.brand-name')
        })
      }
    })
  })

  describe('from stage', function () {
    describe('without subdomain', function () {
      expect(getBrand('https://brand-name.kubestage.hearstapps.net'))
        .toBe('brand-name')
    })

    describe('with subdomain', function () {
      expect(getBrand('https://subdomain.brand-name.kubestage.hearstapps.net'))
        .toBe('subdomain.brand-name')
    })
  })

  describe('from feature', function () {
    describe('without subdomain', function () {
      expect(getBrand('https://brand-name.kubefeature.hearstapps.net'))
        .toBe('brand-name')
    })

    describe('with subdomain', function () {
      expect(getBrand('https://subdomain.brand-name.kubefeature.hearstapps.net'))
        .toBe('subdomain.brand-name')
    })
  })

  describe('from PR', function () {
    describe('without subdomain', function () {
      expect(getBrand('https://brand-name-9999.kubefeature.hearstapps.net'))
        .toBe('brand-name')
    })

    describe('with subdomain', function () {
      expect(getBrand('https://subdomain.brand-name-9999.kubefeature.hearstapps.net'))
        .toBe('subdomain.brand-name')
    })
  })

  describe('from local', function () {
    describe('without subdomain', function () {
      expect(getBrand('http://brand-name.fre-hdm.docker'))
        .toBe('brand-name')
    })

    describe('with subdomain', function () {
      expect(getBrand('http://subdomain.brand-name.fre-hdm.docker'))
        .toBe('subdomain.brand-name')
    })
  })
})
