'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('naclDecrypt', () => {
  it('decrypts a encrypted message', () => {
    const secret = new Uint8Array(32);
    const message = new Uint8Array([1, 2, 3, 4, 5, 4, 3, 2, 1]);
    const { encrypted, nonce } = (0, _.naclEncrypt)(message, secret);
    expect((0, _.naclDecrypt)(encrypted, nonce, secret)).toEqual(message);
  });
  it('returns null on invalid', () => {
    expect((0, _.naclDecrypt)(new Uint8Array(), new Uint8Array(24), new Uint8Array(32))).toEqual(null);
  });
});
