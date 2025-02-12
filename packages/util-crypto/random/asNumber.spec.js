'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('randomAsNumber', () => {
  it('generates subsequent non-matching numbers', () => {
    expect((0, _.randomAsNumber)()).not.toEqual((0, _.randomAsNumber)());
  });
});
