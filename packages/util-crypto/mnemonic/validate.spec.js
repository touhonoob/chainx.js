'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _validate = _interopRequireDefault(require('./validate'));

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('mnemonicValidate', () => {
  beforeEach(async () => {
    await (0, _.cryptoWaitReady)();
  });
  it('returns true on valid', () => {
    expect((0, _validate.default)('seed sock milk update focus rotate barely fade car face mechanic mercy')).toEqual(
      true
    );
  });
  it('returns false on invalid', () => {
    expect((0, _validate.default)('wine photo extra cushion basket dwarf humor cloud truck job boat submit')).toEqual(
      false
    );
  });
});
