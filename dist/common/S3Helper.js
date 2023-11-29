"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Service = void 0;
const common_1 = require("@nestjs/common");
const aws_sdk_1 = require("aws-sdk");
let S3Service = class S3Service {
    constructor() {
        this.s3 = new aws_sdk_1.S3({
            accessKeyId: process.env.ACCESS_KEY,
            secretAccessKey: process.env.SECRET_KEY,
            region: process.env.S3REGION,
        });
    }
    async uploadImageOnS3(path, file) {
        console.log("file-------", file);
        const fileName = `${path}${Date.now()}-${file.originalname.trim()}`;
        const params = {
            Bucket: process.env.S3BUCKET,
            Key: fileName,
            Body: file.buffer,
        };
        console.log("params ----------------", params);
        try {
            await this.s3.upload(params).promise();
            return `/${fileName}`;
        }
        catch (error) {
            console.log(`UploadImageOnS3 error ->> ${error}`);
            throw error;
        }
    }
    async deleteImageFromS3(fileName) {
        if (!fileName) {
            throw new Error("FILE_NOT_FOUND");
        }
        const params = {
            Bucket: process.env.BUCKET_NAME,
            Key: fileName,
        };
        try {
            await this.s3.deleteObject(params).promise();
        }
        catch (error) {
            console.log(`DeleteImageFromS3 error ->> ${error}`);
            throw error;
        }
    }
};
exports.S3Service = S3Service;
exports.S3Service = S3Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], S3Service);
//# sourceMappingURL=S3Helper.js.map