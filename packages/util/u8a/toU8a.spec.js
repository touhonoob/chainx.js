'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('u8aToU8a', () => {
  it('returns an empty Uint8Array when null provided', () => {
    expect((0, _.u8aToU8a)(null)).toHaveLength(0);
  });
  it('returns a Uint8Array (hex input)', () => {
    expect((0, _.u8aToU8a)('0x80000a')).toEqual(new Uint8Array([128, 0, 10]));
  });
  it('returns Uint8Array (string input)', () => {
    expect((0, _.u8aToU8a)('abcde fghij')).toEqual(new Uint8Array([97, 98, 99, 100, 101, 32, 102, 103, 104, 105, 106]));
  });
  it('returns a Uint8Array (buffer input)', () => {
    expect((0, _.u8aToU8a)(Buffer.from('80000a', 'hex'))).toEqual(new Uint8Array([128, 0, 10]));
  });
  it('creates from Array', () => {
    expect((0, _.u8aToU8a)([128, 0, 10, 11, 12])).toEqual(new Uint8Array([128, 0, 10, 11, 12]));
  });
  it('returns a Uint8Array as-is (u8a input)', () => {
    expect((0, _.u8aToU8a)(new Uint8Array([128, 0, 10]))).toEqual(new Uint8Array([128, 0, 10]));
  });
});
