/**
 * @name isBoolean
 * @summary Tests for a boolean value.
 * @description
 * Checks to see if the input value is a JavaScript boolean.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBoolean } from '@chainx/util';
 *
 * isBoolean(false); // => true
 * ```
 */
export default function isBoolean(value: any): value is boolean;
