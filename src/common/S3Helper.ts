import { Injectable } from "@nestjs/common";
import { S3 } from "aws-sdk";
// import { ManagedUpload } from "aws-sdk/lib/s3/managed_upload";

@Injectable()
export class S3Service {
  private readonly s3: S3;

  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
      region: process.env.S3REGION,
    });
  }

  async uploadImageOnS3(path: string, file: any): Promise<string> {
    console.log("file-------", file);
    const fileName = `${path}${Date.now()}-${file.originalname.trim()}`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.S3BUCKET,
      Key: fileName,
      Body: file.buffer,
      // ACL: "public-read",
    };

    console.log("params ----------------", params);

    try {
      await this.s3.upload(params).promise();
      return `/${fileName}`;
    } catch (error) {
      console.log(`UploadImageOnS3 error ->> ${error}`);
      throw error;
    }
  }

  async deleteImageFromS3(fileName: string): Promise<void> {
    if (!fileName) {
      throw new Error("FILE_NOT_FOUND");
    }

    const params: AWS.S3.DeleteObjectRequest = {
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
    };

    try {
      await this.s3.deleteObject(params).promise();
    } catch (error) {
      console.log(`DeleteImageFromS3 error ->> ${error}`);
      throw error;
    }
  }
}
