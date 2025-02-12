'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexAddPrefix', () => {
  it('does not add when prefix is available', () => {
    expect((0, _.hexAddPrefix)('0x0123')).toEqual('0x0123');
  });
  it('adds the prefix when it is not available', () => {
    expect((0, _.hexAddPrefix)('0123')).toEqual('0x0123');
  });
  it('adds extra 0 when length % 2 === 1', () => {
    expect((0, _.hexAddPrefix)('123')).toEqual('0x0123');
  });
  it('returns null as 0x', () => {
    expect((0, _.hexAddPrefix)(null)).toEqual('0x');
  });
});
