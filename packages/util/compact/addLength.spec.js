'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _addLength = _interopRequireDefault(require('./addLength'));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('compactAddLength', () => {
  it('correctly adds the length prefix', () => {
    expect((0, _addLength.default)(Uint8Array.from([12, 13]))).toEqual(Uint8Array.from([2 << 2, 12, 13]));
  });
});
