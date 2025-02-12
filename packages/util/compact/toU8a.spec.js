'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _toU8a = _interopRequireDefault(require('./toU8a'));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
describe('encode', () => {
  it('encodes short u8', () => {
    expect((0, _toU8a.default)(18)).toEqual(new Uint8Array([18 << 2]));
  });
  it('encodes max u8 values', () => {
    expect((0, _toU8a.default)(new _bn.default(63))).toEqual(new Uint8Array([0b11111100]));
  });
  it('encodes basic u16 value', () => {
    expect((0, _toU8a.default)(511)).toEqual(new Uint8Array([0b11111101, 0b00000111]));
  });
  it('encodes basic u16 (not at edge)', () => {
    expect((0, _toU8a.default)(111)).toEqual(new Uint8Array([0xbd, 0x01]));
  });
  it('encodes basic u32 values (short)', () => {
    expect((0, _toU8a.default)(0xffff)).toEqual(new Uint8Array([254, 255, 3, 0]));
  });
  it('encodes basic u32 values (full)', () => {
    expect((0, _toU8a.default)(0xfffffff9)).toEqual(new Uint8Array([3 + ((4 - 4) << 2), 249, 255, 255, 255]));
  });
  it('encodes a large value', () => {
    expect((0, _toU8a.default)(new _bn.default('00005af3107a4000', 16))).toEqual(
      new Uint8Array([3 + ((6 - 4) << 2), 0x00, 0x40, 0x7a, 0x10, 0xf3, 0x5a])
    );
  });
  describe('from Rust', () => {
    // Copied from https://github.com/paritytech/parity-codec/blob/master/src/codec.rs
    const testCases = [
      {
        value: new _bn.default('0'),
        expected: '00',
      },
      {
        value: new _bn.default('63'),
        expected: 'fc',
      },
      {
        value: new _bn.default('64'),
        expected: '01 01',
      },
      {
        value: new _bn.default('16383'),
        expected: 'fd ff',
      },
      {
        value: new _bn.default('16384'),
        expected: '02 00 01 00',
      },
      {
        value: new _bn.default('1073741823'),
        expected: 'fe ff ff ff',
      },
      {
        value: new _bn.default('1073741824'),
        expected: '03 00 00 00 40',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(32)), 2).subn(1),
        expected: '03 ff ff ff ff',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(32)), 2),
        expected: '07 00 00 00 00 01',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(40)), 2),
        expected: '0b 00 00 00 00 00 01',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(48)), 2),
        expected: '0f 00 00 00 00 00 00 01',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(56)), 2).subn(1),
        expected: '0f ff ff ff ff ff ff ff',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(56)), 2),
        expected: '13 00 00 00 00 00 00 00 01',
      },
      {
        value: new _bn.default(''.concat(1, '0'.repeat(64)), 2).subn(1),
        expected: '13 ff ff ff ff ff ff ff ff',
      },
    ];

    function testEncode(value, expected) {
      it('encodes '.concat(value.toString()), () => {
        expect((0, _toU8a.default)(value)).toEqual(Uint8Array.from(expected.split(' ').map(s => parseInt(s, 16))));
      });
    }

    testCases.forEach(_ref => {
      let { value, expected } = _ref;
      return testEncode(value, expected);
    });
  });
});
