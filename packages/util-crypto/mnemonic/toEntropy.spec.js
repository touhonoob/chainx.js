'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _util = require('@chainx/util');

var _toEntropy = _interopRequireDefault(require('./toEntropy'));

var _testing = _interopRequireDefault(require('../schnorrkel/keypair/testing'));

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('mnemonicToEntropy', () => {
  beforeEach(async () => {
    await (0, _.cryptoWaitReady)();
  });

  _testing.default.forEach((_ref, index) => {
    let [mnemonic, entropy] = _ref;
    it('Created correct entropy for '.concat(index), () => {
      expect((0, _util.u8aToHex)((0, _toEntropy.default)(mnemonic))).toEqual(entropy);
    });
  });
});
