const app = require('..')
const test = require('tape')

test('app',t => {
  t.ok(app())
  t.end()
})
