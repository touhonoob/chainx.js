'use strict';

var _util = require('@chainx/util');

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('randomAsU8a', () => {
  it('generates a Uint8Array', () => {
    expect((0, _util.isU8a)((0, _.randomAsU8a)())).toEqual(true);
  });
  it('generated results does not match', () => {
    expect((0, _.randomAsU8a)()).not.toEqual((0, _.randomAsU8a)());
  });
  it('generates 32 bytes by default', () => {
    expect((0, _.randomAsU8a)()).toHaveLength(32);
  });
  it('generates with the suuplied length', () => {
    expect((0, _.randomAsU8a)(66)).toHaveLength(66);
  });
});
