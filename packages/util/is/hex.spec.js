'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isHex', () => {
  const test = '1234abcd';
  it('returns true on 0x hex values', () => {
    expect((0, _.isHex)('0x')).toEqual(true);
  });
  it('returns true on hex values', () => {
    expect((0, _.isHex)('0x'.concat(test))).toEqual(true);
  });
  it('returns true on hex values with String', () => {
    expect((0, _.isHex)(new String('0x'.concat(test)))).toEqual(true);
  });
  it('returns false on hex values (non % 2)', () => {
    expect((0, _.isHex)('0x'.concat(test, '0'))).toEqual(false);
  });
  it('returns true on uppercase values', () => {
    expect((0, _.isHex)('0x'.concat(test.toUpperCase()))).toEqual(true);
  });
  it('return false on hex values unprefixed', () => {
    expect((0, _.isHex)(test)).toEqual(false);
  });
  it('returns false on non-string values', () => {
    expect((0, _.isHex)(false)).toEqual(false);
  });
  it('returns true when valid hex and bitLength matches', () => {
    expect((0, _.isHex)('0x1234', 16)).toEqual(true);
  });
  it('returns true when valid hex and bitLength does not match', () => {
    expect((0, _.isHex)('0x1234', 8)).toEqual(false);
  });
});
