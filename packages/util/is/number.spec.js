'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isNumber', () => {
  it('returns true on valid numbers', () => {
    expect((0, _.isNumber)(2)).toEqual(true);
  });
  it('returns false on invalid numbers', () => {
    expect((0, _.isNumber)('2')).toEqual(false);
  });
});
