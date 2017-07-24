const gp = require('gh-pages')

gp.publish('dist', {
  branch: 'master'
})
