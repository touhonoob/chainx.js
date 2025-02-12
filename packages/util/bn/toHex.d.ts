import BN from 'bn.js';
import { ToBnOptions } from '../types';
interface Options extends ToBnOptions {
    bitLength?: number;
}
/**
 * @name bnToHex
 * @summary Creates a hex value from a BN.js bignumber object.
 * @description
 * `null` inputs returns a `0x` result, BN values return the actual value as a `0x` prefixed hex value. Anything that is not a BN object throws an error. With `bitLength` set, it fixes the number to the specified length.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToHex } from '@chainx/util';
 *
 * bnToHex(new BN(0x123456)); // => '0x123456'
 * ```
 */
export default function bnToHex(value?: BN | number | null, options?: number | Options): string;
export {};
