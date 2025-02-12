import BN from 'bn.js';
import { ToBnOptions } from '../types';
interface Options extends ToBnOptions {
    bitLength?: number;
}
/**
 * @name bnToU8a
 * @summary Creates a Uint8Array object from a BN.
 * @description
 * `null`/`undefined`/`NaN` inputs returns an empty `Uint8Array` result. `BN` input values return the actual bytes value converted to a `Uint8Array`. Optionally convert using little-endian format if `isLE` is set.
 * @example
 * <BR>
 *
 * ```javascript
 * import { bnToU8a } from '@chainx/util';
 *
 * bnToU8a(new BN(0x1234)); // => [0x12, 0x34]
 * ```
 */
export default function bnToU8a(value: BN | number | null, options?: Options): Uint8Array;
export default function bnToU8a(value: BN | number | null, bitLength?: number, isLe?: boolean): Uint8Array;
export {};
