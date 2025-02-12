/**
 * @name isUndefined
 * @summary Tests for a `undefined` values.
 * @description
 * Checks to see if the input value is `undefined`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isUndefined } from '@chainx/util';
 *
 * console.log('isUndefined', isUndefined(void(0))); // => true
 * ```
 */
export default function isUndefined(value?: any): value is undefined;
