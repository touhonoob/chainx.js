'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _formatElapsed = _interopRequireDefault(require('./formatElapsed'));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('formatElapsed', () => {
  const start = 12345678;
  const now = new Date(12345678);
  it('formats a Date', () => {
    expect((0, _formatElapsed.default)(now, new Date(start + 9700))).toEqual('9.7s');
  });
  it('formats a BN', () => {
    expect((0, _formatElapsed.default)(now, new _bn.default(start + 42700))).toEqual('42s');
  });
  it('formats a Compact', () => {
    expect(
      (0, _formatElapsed.default)(now, {
        unwrap: () => new _bn.default(start + 5.3 * 60000),
      })
    ).toEqual('5m');
  });
  it('formats a number', () => {
    expect((0, _formatElapsed.default)(now, start + 42 * 60 * 60000)).toEqual('42h');
  });
  it('formats defaults', () => {
    expect((0, _formatElapsed.default)()).toEqual('0.0s');
  });
});
