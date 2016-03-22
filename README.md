# [is-child-process][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Checks whether a value is child process result, which in case is more specific Node.js EventEmitter. Browserify-ready.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-child-process --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var isChildProcess = require('is-child-process')
```

### returns `false`

```js
var fs = require('fs')
var Dush = require('dush')
var Emitter = require('events').EventEmitter

isChildProcess(fs.createReadStream('package.json')) //=> false
isChildProcess(new Emitter()) //=> false
isChildProcess(new Dush()) //=> false
```

### returns `true`

```js
var cp = require('child_process')

var spawn = cp.spawn('echo', ['hello world'])
var exec = cp.exec('echo "hello world"')

isChildProcess(spawn) //=> true
isChildProcess(exec) //=> true
```


## Related
- [is-emitter](https://github.com/tunnckocore/is-emitter): Check that given value is EventEmitter, not so strict as `is-node-emitter`.
- [is-node-emitter](https://github.com/tunnckocore/is-node-emitter): Strictly checks that given value is nodejs EventEmitter. It's easy, because his API is in frozen state.
- [is-node-stream](https://github.com/tunnckocore/is-node-stream): Strictly and correctly checks if value is a nodejs stream.
- [is-request-stream](https://github.com/tunnckocore/is-request-stream): Check that given value is request stream


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-child-process/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-child-process
[npmjs-img]: https://img.shields.io/npm/v/is-child-process.svg?label=is-child-process

[license-url]: https://github.com/tunnckoCore/is-child-process/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-child-process
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-child-process.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-child-process
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-child-process/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-child-process
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-child-process.svg

[david-url]: https://david-dm.org/tunnckoCore/is-child-process
[david-img]: https://img.shields.io/david/tunnckoCore/is-child-process.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg