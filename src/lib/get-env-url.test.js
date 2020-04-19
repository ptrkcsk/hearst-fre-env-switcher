import getEnvUrl from './get-env-url'

describe('getEnvUrl', function () {
  test.each([
    // local → local
    [
      'local',
      'http://brand-name.fre-hdm.docker/',
      'http://brand-name.fre-hdm.docker/',
    ],
    // local → pr
    [
      '123',
      'http://brand-name.fre-hdm.docker/',
      'https://brand-name-123.kubefeature.hearstapps.net/',
    ],
    // local → feature
    [
      'feature',
      'http://brand-name.fre-hdm.docker/',
      'https://brand-name.kubefeature.hearstapps.net/',
    ],
    // local → stage
    [
      'stage',
      'http://brand-name.fre-hdm.docker/',
      'https://brand-name.kubestage.hearstapps.net/',
    ],
    // local → prod
    [
      'prod',
      'http://caranddriver.fre-hdm.docker/',
      'https://caranddriver.com/',
    ],
    // pr → local
    [
      'local',
      'https://brand-name-123.kubefeature.hearstapps.net/',
      'http://brand-name.fre-hdm.docker/',
    ],
    // pr → pr
    [
      '123',
      'https://brand-name-123.kubefeature.hearstapps.net/',
      'https://brand-name-123.kubefeature.hearstapps.net/',
    ],
    // pr → feature
    [
      'feature',
      'https://brand-name-123.kubefeature.hearstapps.net/',
      'https://brand-name.kubefeature.hearstapps.net/',
    ],
    // pr → stage
    [
      'stage',
      'https://brand-name-123.kubefeature.hearstapps.net/',
      'https://brand-name.kubestage.hearstapps.net/',
    ],
    // pr → prod
    [
      'prod',
      'https://caranddriver-123.kubefeature.hearstapps.net/',
      'https://caranddriver.com/',
    ],
    // feature → local
    [
      'local',
      'https://brand-name.kubefeature.hearstapps.net/',
      'http://brand-name.fre-hdm.docker/',
    ],
    // feature → pr
    [
      '123',
      'https://brand-name.kubefeature.hearstapps.net/',
      'https://brand-name-123.kubefeature.hearstapps.net/',
    ],
    // feature → feature
    [
      'feature',
      'https://brand-name.kubefeature.hearstapps.net/',
      'https://brand-name.kubefeature.hearstapps.net/',
    ],
    // feature → stage
    [
      'stage',
      'https://brand-name-123.kubefeature.hearstapps.net/',
      'https://brand-name.kubestage.hearstapps.net/',
    ],
    // feature → prod
    [
      'prod',
      'https://caranddriver.kubefeature.hearstapps.net/',
      'https://caranddriver.com/',
    ],
    // stage → local
    [
      'local',
      'https://brand-name.kubestage.hearstapps.net/',
      'http://brand-name.fre-hdm.docker/',
    ],
    // stage → pr
    [
      '123',
      'https://brand-name.kubestage.hearstapps.net/',
      'https://brand-name-123.kubefeature.hearstapps.net/',
    ],
    // stage → feature
    [
      'feature',
      'https://brand-name.kubestage.hearstapps.net/',
      'https://brand-name.kubefeature.hearstapps.net/',
    ],
    // stage → stage
    [
      'stage',
      'https://brand-name.kubestage.hearstapps.net/',
      'https://brand-name.kubestage.hearstapps.net/',
    ],
    // stage → prod
    [
      'prod',
      'https://caranddriver.kubestage.hearstapps.net/',
      'https://caranddriver.com/',
    ],
    // prod → local
    [
      'local',
      'https://caranddriver.com/',
      'http://caranddriver.fre-hdm.docker/',
    ],
    // prod → pr
    [
      '123',
      'https://caranddriver.com/',
      'https://caranddriver-123.kubefeature.hearstapps.net/',
    ],
    // prod → feature
    [
      'feature',
      'https://caranddriver.com/',
      'https://caranddriver.kubefeature.hearstapps.net/',
    ],
    // prod → stage
    [
      'stage',
      'https://caranddriver.com/',
      'https://caranddriver.kubestage.hearstapps.net/',
    ],
    // prod → prod
    [
      'prod',
      'https://caranddriver.com/',
      'https://caranddriver.com/',
    ],
  ])('getEnvUrl(%s, %s)', function (env, url, expected) {
    expect(getEnvUrl(env, url)).toBe(expected)
  })

  test.each([
    ['http://wearesweet.fre-hdm.docker', 'https://wearesweet.co/'],
    ['http://elledecoration.fre-hdm.docker', 'https://elledecoration.co.uk/'],
    ['http://caranddriver.fre-hdm.docker', 'https://caranddriver.com/'],
  ])('correct prod url for %s', function (url, expected) {
    expect(getEnvUrl('prod', url)).toBe(expected)
  })
})
