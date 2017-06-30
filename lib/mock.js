'use strict'

const fixtures = require('./fixtures')

module.exports = (clang) => {
  clang.request = (methodName, data, cb) => {
    let result = (fixtures.find(item => item.methodName === methodName) || {
      result: null
    }).result

    if (methodName === 'customer_insert') {
      result[0] = Object.assign({}, result[0], data.customer)
    }

    setImmediate(cb.bind(null, null, result))
  }
}
