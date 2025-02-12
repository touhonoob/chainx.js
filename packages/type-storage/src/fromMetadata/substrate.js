// Copyright 2017-2019 @polkadot/storage authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import {
  v4SStorageFunctionModifier as StorageFunctionModifier,
  v4SStorageFunctionType as StorageFunctionType,
} from '@chainx/types/Metadata';
import { Text, Vector } from '@chainx/types';
import createFunction from './createFunction';
// Small helper function to factorize code on this page.
const createRuntimeFunction = (method, key, { documentation, type }) =>
  createFunction(
    new Text('Substrate'),
    new Text(method),
    {
      documentation: new Vector(Text, [documentation]),
      modifier: new StorageFunctionModifier(1),
      type: new StorageFunctionType(type, 0),
      toJSON: () => key,
    },
    {
      key,
      skipHashing: true,
    }
  );
export const code = createRuntimeFunction('code', ':code', {
  documentation: 'Wasm code of the runtime.',
  type: 'Bytes',
});
export const heapPages = createRuntimeFunction('heapPages', ':heappages', {
  documentation: 'Number of wasm linear memory pages required for execution of the runtime.',
  type: 'u64',
});
export const authorityCount = createRuntimeFunction('authorityCount', ':auth:len', {
  documentation: 'Number of authorities.',
  type: 'u32',
});
export const authorityPrefix = createRuntimeFunction('authorityPrefix', ':auth:', {
  documentation: 'Prefix under which authorities are stored.',
  type: 'u32',
});
export const extrinsicIndex = createRuntimeFunction('extrinsicIndex', ':extrinsic_index', {
  documentation: 'Current extrinsic index (u32) is stored under this key.',
  type: 'u32',
});
export const changesTrieConfig = createRuntimeFunction('changesTrieConfig', ':changes_trie', {
  documentation: 'Changes trie configuration is stored under this key.',
  type: 'u32',
});
