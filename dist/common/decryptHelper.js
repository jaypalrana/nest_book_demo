"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecryptHelper = void 0;
const common_1 = require("@nestjs/common");
const CryptoJS = require("crypto-js");
const Dotenv = require("dotenv");
Dotenv.config();
class DecryptHelper {
    async adminLoginDecrypt(body) {
        try {
            if (body.email) {
                const email = CryptoJS.AES.decrypt(body.email, process.env.CRYPTO_SECRET_KEY);
                body.email = JSON.parse(email.toString(CryptoJS.enc.Utf8));
            }
            if (body.password) {
                const password = CryptoJS.AES.decrypt(body.password, process.env.CRYPTO_SECRET_KEY);
                body.password = JSON.parse(password.toString(CryptoJS.enc.Utf8));
            }
            console.log("body::::", body);
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async signupDecrypter(body) {
        try {
            if (body.firstName) {
                body.firstName = await this.decryptHelper(body.firstName);
            }
            if (body.lastName) {
                body.lastName = await this.decryptHelper(body.lastName);
            }
            if (body.email) {
                body.email = await this.decryptHelper(body.email);
            }
            if (body.password) {
                body.password = await this.decryptHelper(body.password);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async loginDecrypter(body) {
        try {
            if (body.email) {
                body.email = await this.decryptHelper(body.email);
            }
            if (body.password) {
                body.password = await this.decryptHelper(body.password);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async forgotPasswordDecrypter(body) {
        try {
            if (body.password) {
                body.password = await this.decryptHelper(body.password);
            }
            if (body.confirm_password) {
                body.confirm_password = await this.decryptHelper(body.confirm_password);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async forgotPasswordLinkDecrypter(body) {
        try {
            if (body.email) {
                body.email = await this.decryptHelper(body.email);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async emailVerificationDecrypter(body) {
        try {
            if (body.email) {
                body.email = await this.decryptHelper(body.email);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async otpVerificationDecrypter(body) {
        try {
            if (body.email) {
                body.email = await this.decryptHelper(body.email);
            }
            if (body.otp) {
                body.otp = await this.decryptHelper(body.otp);
            }
            return body;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async decryptHelper(data) {
        try {
            const decryptedBytes = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(process.env.CRYPTO_SECRET_KEY), {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
            });
            const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
            console.log("decreptedDataaaa", decryptedData);
            return decryptedData;
        }
        catch (error) {
            console.log(error);
            throw new common_1.UnauthorizedException(error);
        }
    }
}
exports.DecryptHelper = DecryptHelper;
//# sourceMappingURL=decryptHelper.js.map