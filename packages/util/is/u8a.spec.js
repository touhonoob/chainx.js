'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isUint8Array', () => {
  it('returns false on undefined values', () => {
    expect((0, _.isU8a)()).toEqual(false);
  });
  it('returns false on Array values', () => {
    expect((0, _.isU8a)([])).toEqual(false);
  });
  it('returns true on Uint8Array values', () => {
    expect((0, _.isU8a)(new Uint8Array([]))).toEqual(true);
  });
});
