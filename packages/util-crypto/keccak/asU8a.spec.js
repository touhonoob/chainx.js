'use strict';

var _util = require('@chainx/util');

var _wasmCrypto = require('@chainx/wasm-crypto');

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('keccakAsU8a', () => {
  beforeEach(async () => {
    await (0, _wasmCrypto.waitReady)();
  });
  const input = 'test value';
  const output = (0, _util.hexToU8a)('0x2d07364b5c231c56ce63d49430e085ea3033c750688ba532b24029124c26ca5e');
  it('returns an hex representation (string)', () => {
    expect((0, _.keccakAsU8a)(input)).toEqual(output);
  });
  it('returns an hex representation (Buffer)', () => {
    expect((0, _.keccakAsU8a)(Buffer.from(input))).toEqual(output);
  });
  it('returns an hex representation (Uint8Array)', () => {
    expect((0, _.keccakAsU8a)((0, _util.stringToU8a)(input))).toEqual(output);
  });
});
