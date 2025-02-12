/**
 * @name isNull
 * @summary Tests for a `null` values.
 * @description
 * Checks to see if the input value is `null`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isNull } from '@chainx/util';
 *
 * console.log('isNull', isNull(null)); // => true
 * ```
 */
export default function isNull(value?: any): value is null;
