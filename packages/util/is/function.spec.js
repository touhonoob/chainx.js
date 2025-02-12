'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isFunction', () => {
  it('returns true on valid functions', () => {
    expect((0, _.isFunction)(_.isFunction)).toEqual(true);
  });
  it('returns false on invalid functions', () => {
    expect((0, _.isFunction)('notAFunction')).toEqual(false);
  });
});
