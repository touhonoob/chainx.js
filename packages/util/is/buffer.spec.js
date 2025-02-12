'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isBuffer', () => {
  it('returns true when a Buffer value', () => {
    expect((0, _.isBuffer)(Buffer.from([]))).toEqual(true);
  });
  it('returns false on non-Buffer values', () => {
    expect((0, _.isBuffer)(0)).toEqual(false);
  });
});
