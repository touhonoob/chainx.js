// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import { assert, isUndefined } from '@polkadot/util';
import EnumType from '../codec/EnumType';
import Struct from '../codec/Struct';
import MetadataV0 from './v0';
import MetadataV1 from './v1';
import MetadataV2 from './v2';
import v1ToV0 from './v1/toV0';
import v2ToV1 from './v2/toV1';
import MagicNumber from './MagicNumber';

class MetadataEnum extends EnumType {
  constructor(value) {
    super(
      {
        MetadataV0,
        MetadataV1,
        MetadataV2,
      },
      value
    );
  }
  /**
   * @description Returns the wrapped values as a V0 object
   */
  get asV0() {
    return this.value;
  }
  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1() {
    return this.value;
  }
  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV2() {
    return this.value;
  }
  /**
   * @description The version this metadata represents
   */
  get version() {
    return this.index;
  }
}
/**
 * @name MetadataVersioned
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class MetadataVersioned extends Struct {
  constructor(value) {
    super(
      {
        magicNumber: MagicNumber,
        metadata: MetadataEnum,
      },
      value
    );
  }
  /**
   * @description
   */
  get magicNumber() {
    return this.get('magicNumber');
  }
  /**
   * @description the metadata wrapped
   */
  get metadata() {
    return this.get('metadata');
  }
  /**
   * @description the metadata version this structure represents
   */
  get version() {
    return this.metadata.index;
  }
  /**
   * @description Returns the wrapped metadata as a V0 object
   */
  get asV0() {
    if (this.metadata.version === 0) {
      return this.metadata.asV0;
    }
    let v1 = this.asV1;
    if (isUndefined(this._convertedV0)) {
      this._convertedV0 = v1ToV0(v1);
    }
    return this._convertedV0;
  }
  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV1() {
    if (this.metadata.version === 1) {
      return this.metadata.asV1;
    }
    assert(this.metadata.version === 2, `Cannot convert metadata from v${this.metadata.version} to v1`);
    if (isUndefined(this._convertedV1)) {
      this._convertedV1 = v2ToV1(this.metadata.asV2);
    }
    return this._convertedV1;
  }
  /**
   * @description Returns the wrapped values as a V1 object
   */
  get asV2() {
    assert(this.metadata.version === 2, `Cannot convert metadata from v${this.metadata.version} to v2`);
    return this.metadata.asV2;
  }
  getUniqTypes(throwError) {
    return this.metadata.value.getUniqTypes(throwError);
  }
}
