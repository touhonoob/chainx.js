import BN from 'bn.js';
/**
 * @name bnToBn
 * @summary Creates a BN value from a BN.js bignumber or number input.
 * @description
 * `null` inputs returns a `0x0` result, BN values returns the value, numnbers returns a BN representation.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { bnToBn } from '@chainx/util';
 *
 * bnToBn(0x1234); // => BN(0x1234)
 * bnToBn(new BN(0x1234)); // => BN(0x1234)
 * ```
 */
export default function bnToBn(value?: BN | number | null): BN;
