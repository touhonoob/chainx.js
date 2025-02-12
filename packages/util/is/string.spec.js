'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isString', () => {
  it('returns true on valid strings', () => {
    expect((0, _.isString)('123')).toEqual(true);
  });
  it('returns true on empty strings', () => {
    expect((0, _.isString)('')).toEqual(true);
  });
  it('returns true on String object', () => {
    expect((0, _.isString)(new String('foo'))).toEqual(true);
  });
  it('returns false on invalid numbers', () => {
    expect((0, _.isString)(2)).toEqual(false);
  });
});
