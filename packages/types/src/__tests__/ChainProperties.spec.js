// Copyright 2017-2018 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import ChainProperties from '../ChainProperties';
describe('ChainProperties', () => {
  it('decodes from a null value', () => {
    expect([...new ChainProperties(null).entries()]).toEqual([]);
  });
  it('decodes from an actual object', () => {
    expect([
      ...new ChainProperties({
        decimals: 15,
        tokenSymbol: 'BBQ',
      }).entries(),
    ]).toEqual([['decimals', 15], ['tokenSymbol', 'BBQ']]);
  });
});
