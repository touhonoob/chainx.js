'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _toU8a = _interopRequireDefault(require('../hex/toU8a'));

var _fromU8a = _interopRequireDefault(require('./fromU8a'));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
describe('compactFromU8a', () => {
  it('decoded u8 value', () => {
    expect((0, _fromU8a.default)(new Uint8Array([0b11111100]))).toEqual([1, new _bn.default(63)]);
  });
  it('decodes from same u16 encoded value', () => {
    expect((0, _fromU8a.default)(new Uint8Array([0b11111101, 0b00000111]), 32)).toEqual([2, new _bn.default(511)]);
  });
  it('decodes from same u32 encoded value (short)', () => {
    expect((0, _fromU8a.default)(new Uint8Array([254, 255, 3, 0]), 32)).toEqual([4, new _bn.default(0xffff)]);
  });
  it('decodes from same u32 encoded value (full)', () => {
    expect((0, _fromU8a.default)(new Uint8Array([3, 249, 255, 255, 255]), 32)).toEqual([
      5,
      new _bn.default(0xfffffff9),
    ]);
  });
  it('decodes from same u32 as u64 encoded value (full, default)', () => {
    expect((0, _fromU8a.default)(new Uint8Array([3 + ((4 - 4) << 2), 249, 255, 255, 255]), 64)).toEqual([
      5,
      new _bn.default(0xfffffff9),
    ]);
  });
  it('decodes an actual value', () => {
    expect((0, _fromU8a.default)((0, _toU8a.default)('0x0b00407a10f35a'))).toEqual([
      7,
      new _bn.default('5af3107a4000', 16),
    ]);
  });
});
