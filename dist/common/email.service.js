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
exports.EmailService = void 0;
const nodemailer_1 = require("nodemailer");
const Dotenv = require("dotenv");
const common_1 = require("@nestjs/common");
const fs = require("fs");
const handlebars = require("handlebars");
const path = require("path");
Dotenv.config();
let EmailService = class EmailService {
    constructor() {
        this.transporter = (0, nodemailer_1.createTransport)({
            secure: true,
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
    }
    async sendMail(toMail, data) {
        try {
            const getPath = path.join(__dirname, "./../../public");
            console.log("----", getPath);
            const templatePath = path.join(getPath, "sendotp.html");
            const otp = data.message;
            const firstName = data.firstName;
            const html = await this.renderHbsTemplate(templatePath, {
                firstName,
                otp,
                toMail,
            });
            this.transporter.sendMail({
                from: "tristate.mteam@gmail.com",
                to: toMail,
                subject: "OTP VERIFICATION",
                html: html,
            });
            console.log("Email sent successfully");
        }
        catch (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email");
        }
    }
    async sendMailForgot(toMail, data) {
        try {
            const getPath = path.join(__dirname, "./../../public");
            console.log("----", getPath);
            const templatePath = path.join(getPath, "forgotpasswordlink.html");
            const link = data.link;
            const firstName = data.firstName;
            const html = await this.renderHbsTemplate(templatePath, {
                link,
                firstName,
            });
            this.transporter.sendMail({
                from: "tristate.mteam@gmail.com",
                to: toMail,
                subject: "FORGOT PASSWORD",
                html: html,
            });
        }
        catch (error) {
            console.error("Error sending email:", error);
            throw new Error("Failed to send email");
        }
    }
    async renderHbsTemplate(templatePath, data) {
        const template = handlebars.compile(fs.readFileSync(templatePath, "utf-8"));
        return template(data);
    }
    prepareMessage(template, data) {
        const compiledTemplate = handlebars.compile(template);
        return compiledTemplate(data);
    }
};
exports.EmailService = EmailService;
exports.EmailService = EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], EmailService);
//# sourceMappingURL=email.service.js.map