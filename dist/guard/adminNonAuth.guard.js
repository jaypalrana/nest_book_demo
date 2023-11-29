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
exports.AdminNonAuthHeader = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const response_service_1 = require("../common/response.service");
const Dotenv = require("dotenv");
Dotenv.config();
let AdminNonAuthHeader = class AdminNonAuthHeader {
    constructor(jwtService, responseService) {
        this.jwtService = jwtService;
        this.responseService = responseService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const response = context.switchToHttp().getResponse();
            const error = await this.validateHeaders(request);
            console.log("default token --------", process.env.DEFAULT_AUTH_TOKEN);
            if (error) {
                throw this.responseService.error(request, response, error, 501, "en");
            }
            else if (request.headers.authorizations !== process.env.DEFAULT_AUTH_TOKEN) {
                const error = "INVALID_DEFAULT_TOKEN";
                throw this.responseService.error(request, response, error, 501, "en");
            }
            else {
                return true;
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async validateHeaders(request) {
        try {
            let error;
            if (!request.headers.language) {
                return (error = "LANGUAGE_IS_REQUIRED");
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.AdminNonAuthHeader = AdminNonAuthHeader;
exports.AdminNonAuthHeader = AdminNonAuthHeader = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        response_service_1.ResponseService])
], AdminNonAuthHeader);
//# sourceMappingURL=adminNonAuth.guard.js.map