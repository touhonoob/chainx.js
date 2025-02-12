// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { hexToU8a, isHex, isU8a } from '@chainx/util';
import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import { flattenUniq, validateTypes } from '../util';
import { OuterDispatchMetadata } from './Calls';
import { OuterEventMetadata } from './Events';
import { RuntimeModuleMetadata } from './Modules';
// Decodes the runtime metadata as passed through from the `state_getMetadata` call.
/**
 * @name MetadataV0
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV0 extends Struct {
  constructor(value) {
    super(
      {
        outerEvent: OuterEventMetadata,
        modules: Vector.with(RuntimeModuleMetadata),
        outerDispatch: OuterDispatchMetadata,
      },
      MetadataV0.decodeMetadata(value)
    );
  }
  static decodeMetadata(value) {
    if (isHex(value)) {
      // We receive this as an hex in the JSON output from the Node.
      // Convert to u8a and use the U8a version to do the actual parsing.
      return MetadataV0.decodeMetadata(hexToU8a(value));
    } else if (isU8a(value)) {
      // HACK 13 Oct 2018 - For current running BBQ nodes, Metadata is not properly
      // encoded, it does not have a length prefix. For latest substrate master, it
      // is properly encoded. Here we pull the prefix, check it agianst the length -
      // if matches, then we have the length, otherwise we assume it is an older node
      // and use the whole buffer
      const [offset, length] = Compact.decodeU8a(value);
      return value.length === offset + length.toNumber() ? value.subarray(offset) : value;
    }
    // Decode as normal struct
    return value;
  }
  /**
   * @description Wrapped [[OuterDispatchCall]]
   */
  get calls() {
    return this.get('outerDispatch').calls;
  }
  /**
   * @description Wrapped [[OuterEventEventMetadata]]
   */
  get events() {
    return this.get('outerEvent').events;
  }
  /**
   * @description Wrapped [[RuntimeModuleMetadata]]
   */
  get modules() {
    return this.get('modules');
  }
  get argNames() {
    return this.modules.map(modul =>
      modul.module.call.functions.map(fn => fn.args.map(argument => argument.type.toString()))
    );
  }
  get eventNames() {
    return this.events.map(modul => modul.events.map(event => event.args.map(argument => argument.toString())));
  }
  get storageNames() {
    return this.modules.map(modul =>
      modul.storage.isSome
        ? modul.storage
            .unwrap()
            .functions.map(fn =>
              fn.type.isMap
                ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
                : [fn.type.asType.toString()]
            )
        : []
    );
  }
  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes(throwError) {
    const types = flattenUniq([this.argNames, this.eventNames, this.storageNames]);
    validateTypes(types, throwError);
    return types;
  }
}
