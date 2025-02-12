'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _generate = _interopRequireDefault(require('./generate'));

var _validate = _interopRequireDefault(require('./validate'));

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('mnemonicGenerate', () => {
  beforeEach(async () => {
    await (0, _.cryptoWaitReady)();
  });
  it('generates a valid mnemonic (default strength)', () => {
    const mnemonic = (0, _generate.default)();
    console.error(mnemonic);
    expect((0, _validate.default)(mnemonic)).toEqual(true);
  });
  [12, 15, 18, 21, 24].forEach(num => {
    it('generates a valid mnemonic ('.concat(num, ' words)'), () => {
      const mnemonic = (0, _generate.default)(num);
      const isValid = (0, _validate.default)(mnemonic);
      console.error(mnemonic);
      expect(mnemonic.split(' ')).toHaveLength(num);
      expect(isValid).toEqual(true);
    });
  });
});
