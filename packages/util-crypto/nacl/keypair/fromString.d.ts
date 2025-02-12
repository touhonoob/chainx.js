import { Keypair } from '../../types';
/**
 * @name naclKeypairFromString
 * @summary Creates a new public/secret keypair from a string.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied string. The string is hashed and the value used as the input seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromString } from '@chainx/util-crypto';
 *
 * naclKeypairFromString('test'); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromString(value: string): Keypair;
