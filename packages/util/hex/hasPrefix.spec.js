'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexHasPrefix', () => {
  it('returns true when hex prefix is found', () => {
    expect((0, _.hexHasPrefix)('0x123')).toEqual(true);
  });
  it('returns false when no prefix attached', () => {
    expect((0, _.hexHasPrefix)('123')).toEqual(false);
  });
  it('returns false when null value supplied', () => {
    expect((0, _.hexHasPrefix)(null)).toEqual(false);
  });
  it('returns false when non-string value supplied', () => {
    expect((0, _.hexHasPrefix)(false)).toEqual(false);
  });
});
