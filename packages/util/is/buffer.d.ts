/// <reference types="node" />
/**
 * @name isBuffer
 * @summary Tests for a `Buffer` object instance.
 * @description
 * Checks to see if the input object is an instance of `Buffer`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isBuffer } from '@chainx/util';
 *
 * console.log('isBuffer', isBuffer(Buffer.from([]))); // => true
 * ```
 */
export default function isBuffer(value: any): value is Buffer;
