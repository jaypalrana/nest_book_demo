export declare class ResponseService {
    private readonly logger;
    error(req: any, res: any, msg: any, statusCode?: number, language?: string): Promise<void>;
    success(res: any, msg: any, data: any, statusCode?: number, language?: string): Promise<void>;
    getMessage(msg: string, language: string): any;
}
