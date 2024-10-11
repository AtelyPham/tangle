import type { Config } from 'release-it'

export default {
  hooks: {
    'after:bump': 'yarn run build',
  },
  git: {
    commitMessage: 'Release `tangle-substrate-types` v${version}',
    tagName: '${npm.name}/v${version}',
    tagAnnotation: 'Release ${npm.name} v${version}',
    pushRepo: 'git@github.com:AtelyPham/tangle.git',
  },
  github: {
    release: true,
    releaseName: 'Release ${npm.name} v${version}',
    tokenRef: 'RELEASE_IT_GITHUB_TOKEN',
  },
  npm: {
    publish: true,
  },
} satisfies Config
