'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('numberToU8a', () => {
  it('converts 0 to empty', () => {
    expect((0, _.numberToU8a)(0)).toEqual(new Uint8Array([]));
  });
  it('converts undefined to empty', () => {
    expect((0, _.numberToU8a)()).toEqual(new Uint8Array([]));
  });
  it('converts null to empty', () => {
    expect((0, _.numberToU8a)(null)).toEqual(new Uint8Array([]));
  });
  it('converts NaN to empty', () => {
    expect((0, _.numberToU8a)(NaN)).toEqual(new Uint8Array([]));
  });
  it('converts values to the u8a', () => {
    expect((0, _.numberToU8a)(0x3456)).toEqual(new Uint8Array([0x34, 0x56]));
  });
  it('converts values to the u8a (bitLength)', () => {
    expect((0, _.numberToU8a)(0x3456, 32)).toEqual(new Uint8Array([0x00, 0x00, 0x34, 0x56]));
  });
});
