export declare class S3Service {
    private readonly s3;
    constructor();
    uploadImageOnS3(path: string, file: any): Promise<string>;
    deleteImageFromS3(fileName: string): Promise<void>;
}
