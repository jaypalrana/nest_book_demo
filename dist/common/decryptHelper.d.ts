export declare class DecryptHelper {
    adminLoginDecrypt(body: any): Promise<any>;
    signupDecrypter(body: any): Promise<any>;
    loginDecrypter(body: any): Promise<any>;
    forgotPasswordDecrypter(body: any): Promise<any>;
    forgotPasswordLinkDecrypter(body: any): Promise<any>;
    emailVerificationDecrypter(body: any): Promise<any>;
    otpVerificationDecrypter(body: any): Promise<any>;
    decryptHelper(data: any): Promise<string>;
}
