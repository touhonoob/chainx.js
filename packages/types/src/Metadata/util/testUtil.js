// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import extrinsicsFromMeta from '@chainx/extrinsics/fromMetadata';
import createType from '../../codec/createType';
import Metadata from '../Metadata';
import Method from '../../Method';
/**
 * Given the static `rpcData` and the `latestSubstrate` JSON file, Metadata
 * should decode `rpcData` and output `latestSubstrate`.
 */
export function decodeLatestSubstrate(version, rpcData, latestSubstrate) {
  it('decodes latest substrate properly', () => {
    const metadata = new Metadata(rpcData);
    console.error(JSON.stringify(metadata.toJSON()));
    expect(metadata.version).toBe(version);
    expect(metadata[`asV${version}`].modules.length).not.toBe(0);
    expect(metadata.toJSON()).toEqual(latestSubstrate);
  });
}
/**
 * Given a `version`, MetadataV4 and MetadataV{version} should output the same
 * unique types.
 */
export function toV4(version, rpcData) {
  it('converts to V4', () => {
    const metadata = new Metadata(rpcData)[`asV${version}`];
    const metadataV4 = new Metadata(rpcData).asV4;
    expect(metadata.getUniqTypes(true)).toEqual(metadataV4.getUniqTypes(true));
  });
}
/**
 * Given a Metadata, no type should throw when given its fallback value.
 */
export function defaultValues(rpcData) {
  describe('storage with default values', () => {
    const metadata = new Metadata(rpcData);
    Method.injectMethods(extrinsicsFromMeta(metadata));
    metadata.asV4.modules
      .filter(({ storage }) => storage.isSome)
      .map(mod =>
        mod.storage.unwrap().forEach(({ fallback, name, type }) => {
          it(`creates default types for ${mod.prefix}.${name}, type ${type}`, () => {
            expect(() => createType(type.toString(), fallback)).not.toThrow();
          });
        })
      );
  });
}
