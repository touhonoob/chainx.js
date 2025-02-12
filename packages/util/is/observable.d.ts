declare type Observable = {
    next: (...paarams: any[]) => any;
};
/**
 * @name isBObservable
 * @summary Tests for a `Observable` object instance.
 * @description
 * Checks to see if the input object is an instance of `BN` (bn.js).
 * @example
 * <BR>
 *
 * ```javascript
 * import { isObservable } from '@chainx/util';
 *
 * console.log('isObservable', isObservable(...));
 * ```
 */
export default function isObservable(value: any): value is Observable;
export {};
