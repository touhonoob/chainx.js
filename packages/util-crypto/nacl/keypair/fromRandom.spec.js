'use strict';

var _ = require('..');

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('naclKeypairFromRandom', () => {
  let keypair;
  beforeEach(() => {
    keypair = (0, _.naclKeypairFromRandom)();
  });
  it('generates a valid publicKey', () => {
    expect(keypair.publicKey).toHaveLength(32);
  });
  it('generates a valid secretKey', () => {
    expect(keypair.secretKey).toHaveLength(64);
  });
});
