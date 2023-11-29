export declare class EmailService {
    private transporter;
    constructor();
    sendMail(toMail: string, data: any): Promise<void>;
    sendMailForgot(toMail: string, data: any): Promise<void>;
    renderHbsTemplate(templatePath: string, data: any): Promise<string>;
    private prepareMessage;
}
