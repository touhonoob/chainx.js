'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _function = _interopRequireDefault(require('../is/function'));

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('bnFromHex', () => {
  it('exists as a function', () => {
    expect((0, _function.default)(_.bnFromHex)).toEqual(true);
  });
});
