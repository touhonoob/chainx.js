'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isBN', () => {
  it('returns true when a BN value', () => {
    expect((0, _.isBn)(new _bn.default(123))).toEqual(true);
  });
  it('returns false on non-BN values', () => {
    expect((0, _.isBn)(0)).toEqual(false);
  });
});
