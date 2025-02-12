import DeriveJunction from './DeriveJunction';
declare type ExtractResult = {
    password?: string;
    path: Array<DeriveJunction>;
    phrase: string;
};
/**
 * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed).
 */
export default function keyExtract(suri: string): ExtractResult;
export {};
