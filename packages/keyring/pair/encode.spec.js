'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _testingPairs = _interopRequireDefault(require('../testingPairs'));

var _defaults = require('./defaults');

// Copyright 2017-2019 @polkadot/keyring authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const PKCS8_LENGTH =
  _defaults.PKCS8_DIVIDER.length + _defaults.PKCS8_HEADER.length + _defaults.PUB_LENGTH + _defaults.SEC_LENGTH;
const ENCODED_LENGTH = 157;
const keyring = (0, _testingPairs.default)(
  {
    type: 'ed25519',
  },
  false
);
describe('encode', () => {
  it('returns PKCS8 when no passphrase supplied', () => {
    expect(keyring.alice.encodePkcs8()).toHaveLength(PKCS8_LENGTH);
  });
  it('returns encoded PKCS8 when passphrase supplied', () => {
    expect(keyring.alice.encodePkcs8('testing')).toHaveLength(ENCODED_LENGTH);
  });
});
