import '../polyfill';
/**
 * @name schnorrkelVerify
 * @description Verifies the signature of `message`, using the supplied pair
 */
export default function schnorrkelVerify(message: Uint8Array | string, signature: Uint8Array | string, publicKey: Uint8Array | string): boolean;
