/*!
 * is-child-process <https://github.com/tunnckoCore/is-child-process>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var cp = require('child_process')
var test = require('assertit')
var Dush = require('dush')
var isChildProcess = require('./index')

test('should return `true` for `cp.exec`', function (done) {
  var exec = cp.exec('echo "hello world"')
  test.strictEqual(isChildProcess(exec), true)
  done()
})

test('should return `true` for `cp.spawn`', function (done) {
  var spawn = cp.spawn('echo', ['hello world'])
  test.strictEqual(isChildProcess(spawn), true)
  done()
})

test('should return `true` if spawn options.stdio is `inherit`', function (done) {
  var res = cp.spawn('echo', ['hi'], {stdio: 'inherit'})
  test.strictEqual(isChildProcess(res), true)
  done()
})

test('should return `false` for other emitters and streams', function (done) {
  var emitter = new Dush()
  var stream = fs.createReadStream('package.json')
  test.strictEqual(isChildProcess(emitter), false)
  test.strictEqual(isChildProcess(stream), false)
  done()
})
