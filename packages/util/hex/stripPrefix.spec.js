'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexStripPrefix', () => {
  it('returns an empty string when null value supplied', () => {
    expect((0, _.hexStripPrefix)(null)).toEqual('');
  });
  it('strips the prefix from hex strings', () => {
    expect((0, _.hexStripPrefix)('0x1223')).toEqual('1223');
  });
  it('returns un-prefixed hex as-is', () => {
    expect((0, _.hexStripPrefix)('abcd1223')).toEqual('abcd1223');
  });
  it('throws when invalid hex', () => {
    expect(() => (0, _.hexStripPrefix)('0x0x01ab')).toThrow(/Invalid hex/);
  });
});
