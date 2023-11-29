import { CanActivate, ExecutionContext } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ResponseService } from "src/common/response.service";
export declare class AdminNonAuthHeader implements CanActivate {
    private jwtService;
    responseService: ResponseService;
    constructor(jwtService: JwtService, responseService: ResponseService);
    canActivate(context: ExecutionContext): Promise<any>;
    validateHeaders(request: any): Promise<string>;
}
