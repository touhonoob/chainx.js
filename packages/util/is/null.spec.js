'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isNull', () => {
  it('returns true when a null value', () => {
    expect((0, _.isNull)(null)).toEqual(true);
  });
  it('returns false on non-null values', () => {
    expect((0, _.isNull)()).toEqual(false);
  });
});
