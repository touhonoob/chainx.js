/**
 * @name isError
 * @summary Tests for a `Error` object instance.
 * @description
 * Checks to see if the input object is an instance of `Error`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isError } from '@chainx/util';
 *
 * console.log('isError', isError(new Error('message'))); // => true
 * ```
 */
export default function isError(value: any): value is Error;
