'use strict';

var _ = require('.');

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('isObservable', () => {
  it('returns true on valid observables', () => {
    expect(
      (0, _.isObservable)({
        next: () => true,
      })
    ).toEqual(true);
  });
  it('returns false on invalid objects', () => {
    expect((0, _.isObservable)('notAnObservable')).toEqual(false);
  });
  it('returns false on invalid next functions', () => {
    expect(
      (0, _.isObservable)({
        next: true,
      })
    ).toEqual(false);
  });
});
