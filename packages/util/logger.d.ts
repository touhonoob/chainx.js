import { Logger } from './types';
export declare function format(value: any): any;
/**
 * @name Logger
 * @summary Creates a consistent log interface for messages
 * @description
 * Returns a `Logger` that has `.log`, `.error`, `.warn` and `.debug` (controlled with environment `DEBUG=typeA,typeB`) methods. Logging is done with a consistent prefix (type of logger, date) followed by the actual message using the underlying console.
 * @example
 * <BR>
 *
 * ```javascript
 * const l from '@chainx/util/logger')('test');
 *
 * l.log('blah'); // <date>     TEST: blah
 * ```
 */
export default function logger(_type: string): Logger;
