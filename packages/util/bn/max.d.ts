import BN from 'bn.js';
/**
 * @name max
 * @summary Finds and returns the highest value in an array of BNs.
 * @example
 * <BR>
 *
 * ```javascript
 * import BN from 'bn.js';
 * import { max } from '@chainx/util';
 *
 * max([new BN(1), new BN(3), new BN(2)]).toString(); // => '3'
 * ```
 */
export default function max(...items: BN[]): BN;
