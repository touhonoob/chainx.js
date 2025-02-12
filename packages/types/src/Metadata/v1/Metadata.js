// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import Option from '../../codec/Option';
import Struct from '../../codec/Struct';
import Vector from '../../codec/Vector';
import Text from '../../Text';
import { flattenUniq, validateTypes } from '../util';
import { FunctionMetadata } from './Calls';
import { EventMetadata } from './Events';
import { StorageFunctionMetadata } from './Storage';
/**
 * @name ModuleMetadata
 * @description
 * The definition of a module in the system
 */
export class ModuleMetadata extends Struct {
  constructor(value) {
    super(
      {
        name: Text,
        prefix: Text,
        storage: Option.with(Vector.with(StorageFunctionMetadata)),
        calls: Option.with(Vector.with(FunctionMetadata)),
        events: Option.with(Vector.with(EventMetadata)),
      },
      value
    );
  }
  /**
   * @description the module calls
   */
  get calls() {
    return this.get('calls');
  }
  /**
   * @description the module events
   */
  get events() {
    return this.get('events');
  }
  /**
   * @description the module name
   */
  get name() {
    return this.get('name');
  }
  /**
   * @description the module prefix
   */
  get prefix() {
    return this.get('prefix');
  }
  /**
   * @description the associated module storage
   */
  get storage() {
    return this.get('storage');
  }
}
/**
 * @name MetadataV1
 * @description
 * The runtime metadata as a decoded structure
 */
export default class MetadataV1 extends Struct {
  constructor(value) {
    super(
      {
        modules: Vector.with(ModuleMetadata),
      },
      value
    );
  }
  /**
   * @description The associated modules for this structure
   */
  get modules() {
    return this.get('modules');
  }
  get callNames() {
    return this.modules.map(mod =>
      mod.calls.isNone ? [] : mod.calls.unwrap().map(fn => fn.args.map(arg => arg.type.toString()))
    );
  }
  get eventNames() {
    return this.modules.map(mod =>
      mod.events.isNone ? [] : mod.events.unwrap().map(event => event.args.map(arg => arg.toString()))
    );
  }
  get storageNames() {
    return this.modules.map(mod =>
      mod.storage.isNone
        ? []
        : mod.storage
            .unwrap()
            .map(fn =>
              fn.type.isMap
                ? [fn.type.asMap.key.toString(), fn.type.asMap.value.toString()]
                : [fn.type.asType.toString()]
            )
    );
  }
  /**
   * @description Helper to retrieve a list of all type that are found, sorted and de-deuplicated
   */
  getUniqTypes(throwError) {
    const types = flattenUniq([this.callNames, this.eventNames, this.storageNames]);
    validateTypes(types, throwError);
    return types;
  }
}
