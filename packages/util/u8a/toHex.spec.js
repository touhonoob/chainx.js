'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('u8aToHex', () => {
  it('returns empty as 0x', () => {
    expect((0, _.u8aToHex)()).toEqual('0x');
  });
  it('returns empty as "" (unprefixed)', () => {
    expect((0, _.u8aToHex)(null, -1, false)).toEqual('');
  });
  it('returns the hex value for the array', () => {
    expect((0, _.u8aToHex)(new Uint8Array([128, 0, 10]))).toEqual('0x80000a');
  });
  it('returns the hex value for the array (unprefixed)', () => {
    expect((0, _.u8aToHex)(new Uint8Array([128, 0, 10]), -1, false)).toEqual('80000a');
  });
  it('handles starting zeros correctly', () => {
    expect((0, _.u8aToHex)(new Uint8Array([0, 1, 0, 0, 0, 0, 0, 0]))).toEqual('0x0001000000000000');
  });
  it('returns the hex value where allowed < max', () => {
    expect((0, _.u8aToHex)(new Uint8Array(Uint8Array.from([128, 0, 10, 11]), 64))).toEqual('0x80000a0b');
  });
  it('returns the trimmed hex value where allowed >= max', () => {
    expect((0, _.u8aToHex)(new Uint8Array([128, 0, 10, 11, 12, 13]), 32)).toEqual('0x8000…0c0d');
  });
});
