import { BitLength } from './types';
import BN from 'bn.js';
/**
 * @name compactFromU8a
 * @description Retrievs the offset and encoded length from a compact-prefixed value
 * @example
 * <BR>
 *
 * ```javascript
 * import { compactFromU8a } from '@chainx/util';
 *
 * const [offset, length] = compactFromU8a(new Uint8Array([254, 255, 3, 0]), 32));
 *
 * console.log('value offset=', offset, 'length=', length); // 4, 0xffff
 * ```
 */
export default function compactFromU8a(_input: Uint8Array | string, bitLength?: BitLength): [number, BN];
