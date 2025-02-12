'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _bn = _interopRequireDefault(require('bn.js'));

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('bnMax', () => {
  it('finds BN maximum', () => {
    expect((0, _.bnMax)(new _bn.default(1), new _bn.default(2), new _bn.default(3))).toEqual(new _bn.default(3));
  });
});
