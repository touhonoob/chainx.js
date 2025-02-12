import { Keypair } from '../../types';
/**
 * @name naclKeypairFromSeed
 * @summary Creates a new public/secret keypair from a seed.
 * @description
 * Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 * @example
 * <BR>
 *
 * ```javascript
 * import { naclKeypairFromSeed } from '@chainx/util-crypto';
 *
 * naclKeypairFromSeed(...); // => { secretKey: [...], publicKey: [...] }
 * ```
 */
export default function naclKeypairFromSeed(seed: Uint8Array): Keypair;
