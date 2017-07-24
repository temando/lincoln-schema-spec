var Ajv = require('ajv')
var test = require('tape')

test('lincoln-ui is a valid schema', function (t) {
  t.plan(1)

  var schema = require('./../src/')

  var ajv = new Ajv()
  t.ok(ajv.validateSchema(schema))
})
