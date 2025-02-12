'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _asValue = _interopRequireDefault(require('./asValue'));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('xxhash64AsValue', () => {
  it('creates the correct output (string input)', () => {
    expect((0, _asValue.default)('abcd', 0xabcd).toString(16)).toEqual('e29f70f8b8c96df7');
  });
  it('creates the correct output (Buffer input)', () => {
    expect((0, _asValue.default)(Buffer.from([0x61, 0x62, 0x63, 0x64]), 0xabcd).toString(16)).toEqual(
      'e29f70f8b8c96df7'
    );
  });
  it('creates the correct output (Uint8Array input)', () => {
    expect((0, _asValue.default)(new Uint8Array([0x61, 0x62, 0x63, 0x64]), 0xabcd).toString(16)).toEqual(
      'e29f70f8b8c96df7'
    );
  });
});
