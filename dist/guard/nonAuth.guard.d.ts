import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ResponseService } from "src/common/response.service";
export declare class NonAuthHeader implements CanActivate {
    private jwtService;
    responseService: ResponseService;
    constructor(jwtService: JwtService, responseService: ResponseService);
    canActivate(context: ExecutionContext): Promise<any>;
    validateHeaders(request: any): Promise<"LANGUAGE_IS_REQUIRED" | "AUTHORIZATION_TOKEN_REQUIRED" | "DEVICE_ID_IS_REQUIRED" | "DEVICE_TYPE_IS_REQUIRED" | "APP_VERSION_MISSING" | "OS_REQUIRED" | "DEVICE_TOKEN_REQUIRED" | "INVALID_APP_VERSION" | "UPGRADE_APP">;
}
