declare type ObjectIndexed = {
    [index: string]: any;
};
/**
 * @name isObject
 * @summary Tests for an `object`.
 * @description
 * Checks to see if the input value is a JavaScript object.
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObject } from '@chainx/util';
 *
 * isObject({}); // => true
 * isObject('something'); // => false
 * ```
 */
export default function isObject(value: any): value is ObjectIndexed;
export {};
