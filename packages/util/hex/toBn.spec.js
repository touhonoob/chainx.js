'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexToBn', () => {
  it('converts prefixed hex values to BN', () => {
    expect((0, _.hexToBn)(0x81).toString(16)).toBe('81');
  });
  it('converts null values to BN(0)', () => {
    expect((0, _.hexToBn)(null).toNumber()).toBe(0);
  });
  it('converts 0x values to BN(0)', () => {
    expect((0, _.hexToBn)('0x').toNumber()).toBe(0);
  });
  it('should convert with Big Endian by default', () => {
    expect((0, _.hexToBn)('0x0100').toNumber()).toBe(256);
  });
  it('converts 0x values to BN(0) (LE)', () => {
    expect(
      (0, _.hexToBn)('0x', {
        isLe: true,
      }).toNumber()
    ).toBe(0);
  });
  it('converts little-endian', () => {
    expect(
      (0, _.hexToBn)('0x4500000000000000', {
        isLe: true,
      }).toNumber()
    ).toBe(69);
  });
  it('handles negative numbers (LE)', () => {
    expect(
      (0, _.hexToBn)('0x2efb', {
        isLe: true,
        isNegative: true,
      }).toNumber()
    ).toBe(-1234);
  });
  it('handles negative numbers (BE)', () => {
    expect(
      (0, _.hexToBn)('0xfb2e', {
        isLe: false,
        isNegative: true,
      }).toNumber()
    ).toBe(-1234);
  });
  it('handles starting zeros correctly (BE)', () => {
    expect(
      (0, _.hexToBn)('0x0000000000000100', {
        isLe: false,
      }).toNumber()
    ).toBe(256);
  });
  it('handles starting zeros correctly (LE)', () => {
    expect(
      (0, _.hexToBn)('0x0001000000000000', {
        isLe: true,
      }).toNumber()
    ).toBe(256);
  });
  it('handles backwards compatibility', () => {
    expect(
      (0, _.hexToBn)('0x0001000000000000', false).eq(
        (0, _.hexToBn)('0x0001000000000000', {
          isLe: false,
        })
      )
    ).toBe(true);
    expect(
      (0, _.hexToBn)('0x0001000000000000', true).eq(
        (0, _.hexToBn)('0x0001000000000000', {
          isLe: true,
        })
      )
    ).toBe(true);
  });
});
