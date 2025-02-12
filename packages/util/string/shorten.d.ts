/**
 * @name stringShorten
 * @summary Returns a string with maximum length
 * @description
 * Checks the string against the `prefixLength`, if longer than dopuble this, shortens it by placing `..` in the middle of it
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringShorten } from '@chainx/util';
 *
 * stringShorten('1234567890', 2); // => 12..90
 * ```
 */
export default function stringShorten(_value?: any, prefixLength?: number): string;
