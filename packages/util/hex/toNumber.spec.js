'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexToNumber', () => {
  it('converts an empty to NaN', () => {
    expect((0, _.hexToNumber)()).toEqual(NaN);
  });
  it('converts to a number from hex', () => {
    expect((0, _.hexToNumber)('0x1234')).toEqual(0x1234);
  });
});
