'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isBoolean', () => {
  it('returns true on false', () => {
    expect((0, _.isBoolean)(false)).toEqual(true);
  });
  it('returns true on true', () => {
    expect((0, _.isBoolean)(true)).toEqual(true);
  });
  it('returns false on invalid booleans', () => {
    expect((0, _.isBoolean)('notABool')).toEqual(false);
  });
});
