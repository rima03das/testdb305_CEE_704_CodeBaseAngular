import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export declare const AlgorithmName: InjectionToken<string>;
export declare class CEEEncryptDecryptUtil {
    private algorithmName;
    private encMethod;
    delimiter: string;
    constructor(algorithmName: string);
    /**
     * function encrypts the file that is send
     * @param strFile: string the file or the text
     * @param secretKey the key to encrypt the file
     * @returns encrypted file
     */
    encrypt(strFile: string, secretKey: string, cipherTextBlob: string): string;
    /**
     * function decrypts the file that is send
     * @param strFile the file or the text
     * @param secretKey the secret key that gets returned from the decryption
     * @returns decrypted file
     */
    decrypt(strFile: any, secretKey: any): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<CEEEncryptDecryptUtil, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CEEEncryptDecryptUtil>;
}
//# sourceMappingURL=cee-encrypt-decrypt-util.d.ts.map