'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('bnToHex', () => {
  it('converts null values to 0x00', () => {
    expect((0, _.bnToHex)(null)).toBe('0x00');
  });
  it('converts BN values to a prefixed hex representation', () => {
    expect((0, _.bnToHex)(new _bn.default(128))).toBe('0x80');
  });
  it('converts BN values to a prefixed hex representation (bitLength)', () => {
    expect((0, _.bnToHex)(new _bn.default(128), 16)).toBe('0x0080');
  });
  it('converts BN values to a prefixed hex representation (LE)', () => {
    expect(
      (0, _.bnToHex)(new _bn.default(128), {
        bitLength: 16,
        isLe: true,
      })
    ).toBe('0x8000');
  });
  it('handles negative numbers', () => {
    expect(
      (0, _.bnToHex)(new _bn.default(-1234), {
        isNegative: true,
      })
    ).toBe('0xfb2e');
  });
  it('handles negative numbers (with bitLength)', () => {
    expect(
      (0, _.bnToHex)(new _bn.default(-1234), {
        bitLength: 32,
        isNegative: true,
      })
    ).toBe('0xfffffb2e');
  });
  it('handles backwards compatibility', () => {
    expect((0, _.bnToHex)(new _bn.default(1234), 32)).toBe(
      (0, _.bnToHex)(new _bn.default(1234), {
        bitLength: 32,
      })
    );
  });
});
