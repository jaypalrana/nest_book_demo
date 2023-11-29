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
exports.NonAuthHeader = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const Semver = require("semver");
const response_service_1 = require("../common/response.service");
const Dotenv = require("dotenv");
Dotenv.config();
let NonAuthHeader = class NonAuthHeader {
    constructor(jwtService, responseService) {
        this.jwtService = jwtService;
        this.responseService = responseService;
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const response = context.switchToHttp().getResponse();
            const error = await this.validateHeaders(request);
            if (error) {
                throw this.responseService.error(request, response, error, 501, "en");
            }
            else if (request.headers.authorizations !== process.env.DEFAULT_AUTH_TOKEN) {
                const error = "INVALID_DEFAULT_TOKEN";
                throw this.responseService.error(request, response, error, 501);
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
            console.log("req======>", request.headers);
            if (!request.headers.language) {
                return (error = "LANGUAGE_IS_REQUIRED");
            }
            else if (!request.headers.authorizations) {
                return (error = "AUTHORIZATION_TOKEN_REQUIRED");
            }
            else if (!request.headers.device_id) {
                return (error = "DEVICE_ID_IS_REQUIRED");
            }
            else if (!request.headers.device_type) {
                return (error = "DEVICE_TYPE_IS_REQUIRED");
            }
            else if (!request.headers.app_version) {
                return (error = "APP_VERSION_MISSING");
            }
            else if (!request.headers.os) {
                return (error = "OS_REQUIRED");
            }
            else if (!request.headers.device_token) {
                return (error = "DEVICE_TOKEN_REQUIRED");
            }
            else {
                let version, currentAppVersion;
                if (request.headers.device_type == "0") {
                    version = request.headers.app_version;
                    currentAppVersion = process.env.IOS_APP_VERSION;
                }
                if (request.headers.device_type == "1") {
                    version = request.headers.app_version;
                    currentAppVersion = process.env.ANDROID_APP_VERSION;
                }
                let tmpVersion = version;
                tmpVersion = version.split(".");
                tmpVersion =
                    tmpVersion.length < 3
                        ? tmpVersion.concat(["0", "0", "0"])
                        : tmpVersion;
                tmpVersion.splice(3);
                version = tmpVersion.join(".");
                if (Semver.valid(version) === null) {
                    return (error = "INVALID_APP_VERSION");
                }
                else {
                    if (Semver.gte(version, currentAppVersion)) {
                    }
                    else {
                        return (error = "UPGRADE_APP");
                    }
                }
            }
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.NonAuthHeader = NonAuthHeader;
exports.NonAuthHeader = NonAuthHeader = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        response_service_1.ResponseService])
], NonAuthHeader);
//# sourceMappingURL=nonAuth.guard.js.map