/**
 * @name isNumber
 * @summary Tests for a JavaScript number.
 * @description
 * Checks to see if the input value is a valid number.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNumber } from '@chainx/util';
 *
 * console.log('isNumber', isNumber(1234)); // => true
 * ```
 */
export default function isNumber(value: any): value is number;
