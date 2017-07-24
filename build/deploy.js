var gp = require('gh-pages')

gp.publish('dist', {
  branch: 'gh-page',
  message: 'Auto-generated commit'
})
