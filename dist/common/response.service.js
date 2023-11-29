"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResponseService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseService = void 0;
const common_1 = require("@nestjs/common");
const Messages = require("./messages.json");
let ResponseService = ResponseService_1 = class ResponseService {
    constructor() {
        this.logger = new common_1.Logger(ResponseService_1.name);
    }
    async error(req, res, msg, statusCode = 500, language = "en") {
        if (typeof msg === "string") {
            msg = this.getMessage(msg, language)
                ? this.getMessage(msg, language)
                : msg;
        }
        console.log("message", msg);
        if (msg == "User is blocked by admin")
            statusCode = 403;
        const response = {
            code: 0,
            status: "FAIL",
            message: msg,
        };
        const d = new Date();
        const formatted_date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
        msg = typeof msg == "object" ? JSON.stringify(msg) : msg;
        this.logger.error(`[${formatted_date}] ${req.method}:${req.originalUrl} ${msg}`);
        res.status(statusCode).json(response);
    }
    async success(res, msg, data, statusCode = 200, language = "en") {
        try {
            if (typeof msg === "string") {
                msg = await this.getMessage(msg, language);
            }
            const response = {
                code: 1,
                status: "SUCCESS",
                message: msg,
                data: data,
            };
            res.status(statusCode).json(response);
        }
        catch (error) {
            console.log(`\nsuccess error ->> `, error);
            return;
        }
    }
    getMessage(msg, language) {
        console.log("starring");
        const lang = language ? language : "en";
        return Messages[lang][msg] || Messages[lang]["SOMETHING_WENT_WRONG"];
    }
};
exports.ResponseService = ResponseService;
exports.ResponseService = ResponseService = ResponseService_1 = __decorate([
    (0, common_1.Injectable)()
], ResponseService);
//# sourceMappingURL=response.service.js.map