'use strict';

var _util = require('@chainx/util');

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('randomAsBuffer', () => {
  it('generated results does not match', () => {
    expect((0, _.randomAsHex)()).not.toEqual((0, _.randomAsHex)());
  });
  it('is a valid hex number', () => {
    expect((0, _util.isHex)((0, _.randomAsHex)())).toEqual(true);
  });
  it('generates 32 bytes by default', () => {
    expect((0, _.randomAsHex)()).toHaveLength(32 * 2 + 2);
  });
  it('generates with the supplied length', () => {
    expect((0, _.randomAsHex)(66)).toHaveLength(66 * 2 + 2);
  });
});
