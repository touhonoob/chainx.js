'use strict';

var _util = require('@chainx/util');

var _wasmCrypto = require('@chainx/wasm-crypto');

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('naclKeypairFromSeed', () => {
  // NOTE: Aligned with Rust test, b"12345678901234567890123456789012"
  const TEST = (0, _util.stringToU8a)('12345678901234567890123456789012');
  const RESULT = {
    publicKey: new Uint8Array([
      0x2f,
      0x8c,
      0x61,
      0x29,
      0xd8,
      0x16,
      0xcf,
      0x51,
      0xc3,
      0x74,
      0xbc,
      0x7f,
      0x08,
      0xc3,
      0xe6,
      0x3e,
      0xd1,
      0x56,
      0xcf,
      0x78,
      0xae,
      0xfb,
      0x4a,
      0x65,
      0x50,
      0xd9,
      0x7b,
      0x87,
      0x99,
      0x79,
      0x77,
      0xee,
    ]),
    secretKey: new Uint8Array([
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      48,
      49,
      50, // public part
      0x2f,
      0x8c,
      0x61,
      0x29,
      0xd8,
      0x16,
      0xcf,
      0x51,
      0xc3,
      0x74,
      0xbc,
      0x7f,
      0x08,
      0xc3,
      0xe6,
      0x3e,
      0xd1,
      0x56,
      0xcf,
      0x78,
      0xae,
      0xfb,
      0x4a,
      0x65,
      0x50,
      0xd9,
      0x7b,
      0x87,
      0x99,
      0x79,
      0x77,
      0xee,
    ]),
  };
  beforeEach(async () => {
    await (0, _wasmCrypto.waitReady)();
  });
  it('generates a valid publicKey/secretKey pair (u8a)', () => {
    expect((0, _.naclKeypairFromSeed)(TEST)).toEqual(RESULT);
  });
});
