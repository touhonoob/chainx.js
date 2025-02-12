'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _util = require('@chainx/util');

var _wasmCrypto = require('@chainx/wasm-crypto');

var _asU8a = _interopRequireDefault(require('../random/asU8a'));

var _fromSeed = _interopRequireDefault(require('./keypair/fromSeed'));

var _sign = _interopRequireDefault(require('./sign'));

var _verify = _interopRequireDefault(require('./verify'));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const MESSAGE = (0, _util.stringToU8a)('this is a message');
describe('sign and verify', () => {
  beforeEach(async () => {
    return (0, _wasmCrypto.waitReady)();
  });
  it('has 64-byte signatures', () => {
    const pair = (0, _fromSeed.default)((0, _asU8a.default)());
    expect((0, _sign.default)(MESSAGE, pair)).toHaveLength(64);
  });
  it('can sign and verify a message', () => {
    const pair = (0, _fromSeed.default)((0, _asU8a.default)());
    const signature = (0, _sign.default)(MESSAGE, pair);
    expect((0, _verify.default)(MESSAGE, signature, pair.publicKey)).toBe(true);
  });
});
