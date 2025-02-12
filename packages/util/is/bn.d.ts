import BN from 'bn.js';
/**
 * @name isBn
 * @summary Tests for a `BN` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { isBn } from '@chainx/util';
 *
 * console.log('isBn', isBn(new BN(1))); // => true
 * ```
 */
export default function isBn(value: any): value is BN;
