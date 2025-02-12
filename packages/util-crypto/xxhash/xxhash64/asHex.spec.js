'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('xxhash64AsHex', () => {
  it('creates the correct hex output', () => {
    expect((0, _.xxhash64AsHex)('abcd', 0xabcd)).toEqual('0xe29f70f8b8c96df7');
  });
});
