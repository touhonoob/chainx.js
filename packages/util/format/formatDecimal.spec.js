'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _formatDecimal = _interopRequireDefault(require('./formatDecimal'));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('formatDecimal', () => {
  it('formats decimals in number groupings', () => {
    expect((0, _formatDecimal.default)('12345')).toEqual('12,345');
  });
  it('formats decimal-only in number groupings', () => {
    expect((0, _formatDecimal.default)('test6789')).toEqual('6,789');
  });
  it('returns input for non-decimal', () => {
    expect((0, _formatDecimal.default)('test')).toEqual('test');
  });
});
