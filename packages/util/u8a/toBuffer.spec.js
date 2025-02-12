'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('u8aToBuffer', () => {
  it('returns [] when the buffer is null', () => {
    expect((0, _.u8aToBuffer)(null)).toEqual(Buffer.from([]));
  });
  it('returns the Buffer value for the Uint8Array', () => {
    expect((0, _.u8aToBuffer)(new Uint8Array([128, 0, 10]))).toEqual(Buffer.from([128, 0, 10]));
  });
});
