/**
 * @name isString
 * @summary Tests for a string.
 * @description
 * Checks to see if the input value is a JavaScript string.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isString } from '@chainx/util';
 *
 * console.log('isString', isString('test')); // => true
 * ```
 */
export default function isString(value: any): value is string | String;
