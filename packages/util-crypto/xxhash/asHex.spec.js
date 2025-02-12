'use strict';

var _wasmCrypto = require('@chainx/wasm-crypto');

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('xxhashAsHex', () => {
  beforeEach(async () => {
    await (0, _wasmCrypto.waitReady)();
  });
  it('returns a 64-bit value by default', () => {
    expect((0, _.xxhashAsHex)('abc')).toEqual('0x990977adf52cbc44');
  });
  it('returns a 128-bit value (as specified)', () => {
    expect((0, _.xxhashAsHex)('abc', 128)).toEqual('0x990977adf52cbc440889329981caa9be');
  });
  it('returns a 256-bit value (as specified)', () => {
    expect((0, _.xxhashAsHex)('abc', 256)).toEqual(
      '0x990977adf52cbc440889329981caa9bef7da5770b2b8a05303b75d95360dd62b'
    );
  });
});
