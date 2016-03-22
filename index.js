/*!
 * is-child-process <https://github.com/tunnckoCore/is-child-process>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isArray = require('isarray')
var isEmitter = require('is-node-emitter')

module.exports = function isChildProcess (val) {
  return isEmitter(val) &&
    hasOwn(val, 'stdin') &&
    hasOwn(val, 'stdout') &&
    hasOwn(val, 'stdio') &&
    isArray(val.stdio) &&
    val.stdio.length > 0
}

function hasOwn (obj, val) {
  return Object.prototype.hasOwnProperty.call(obj, val)
}
