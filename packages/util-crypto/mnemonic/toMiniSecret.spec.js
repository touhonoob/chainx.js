'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _util = require('@chainx/util');

var _toMiniSecret = _interopRequireDefault(require('./toMiniSecret'));

var _testing = _interopRequireDefault(require('../schnorrkel/keypair/testing'));

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('mnemonicToMiniSecret', () => {
  beforeEach(async () => {
    await (0, _.cryptoWaitReady)();
  });
  it('generates a valid seed', () => {
    expect(
      (0, _util.u8aToHex)(
        (0, _toMiniSecret.default)('seed sock milk update focus rotate barely fade car face mechanic mercy')
      )
    ).toEqual('0x4d1ab2a57929edfd018aaa974e62ed557e3f54b4104acabedf73c8f5a1dbb029');
  });

  _testing.default.forEach((_ref, index) => {
    let [mnemonic, , seed] = _ref;
    it('Created correct seed for '.concat(index), () => {
      expect((0, _util.u8aToHex)((0, _toMiniSecret.default)(mnemonic, 'Substrate'))).toEqual(
        // mini returned here, only check first 32-bytes (64 hex + 2 prefix)
        seed.substr(0, 66)
      );
    });
  });
});
