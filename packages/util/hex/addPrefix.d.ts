/**
 * @name hexAddPrefix
 * @summary Adds the `0x` prefix to string values.
 * @description
 * Returns a `0x` prefixed string from the input value. If the input is already prefixed, it is returned unchanged.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexAddPrefix } from '@chainx/util';
 *
 * console.log('With prefix', hexAddPrefix('0a0b12')); // => 0x0a0b12
 * ```
 */
export default function hexAddPrefix(value?: string | null): string;
