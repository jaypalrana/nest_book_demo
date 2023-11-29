"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCommonDecorators = exports.ApiCommonResponses = exports.ApiAuthHeaders = exports.ApiOperationWithSwaggerSummary = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function ApiOperationWithSwaggerSummary(summary) {
    return (0, swagger_1.ApiOperation)({ summary });
}
exports.ApiOperationWithSwaggerSummary = ApiOperationWithSwaggerSummary;
function ApiAuthHeaders() {
    return (0, swagger_1.ApiHeaders)([
        {
            name: "language",
            description: "enter device id",
            required: true,
        },
        {
            name: "device_id",
            description: "enter device id",
            required: true,
        },
        {
            name: "device_type",
            description: "enter device type",
            required: true,
        },
        {
            name: "device_token",
            description: "enter device token",
            required: true,
        },
        {
            name: "os",
            description: "enter os",
            required: true,
        },
        {
            name: "app_version",
            description: "enter appversion",
            required: false,
        },
        {
            name: "authorizations",
            description: "enter authorization token",
            required: true,
        },
    ]);
}
exports.ApiAuthHeaders = ApiAuthHeaders;
function ApiCommonResponses() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }), (0, swagger_1.ApiResponse)({ status: 401, description: "Invalid Login credentials." }), (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }), (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }), (0, swagger_1.ApiResponse)({
        status: 403,
        description: "Forbidden, The user does not have access.",
    }));
}
exports.ApiCommonResponses = ApiCommonResponses;
function ApiCommonDecorators() {
    return (0, common_1.applyDecorators)(ApiCommonResponses());
}
exports.ApiCommonDecorators = ApiCommonDecorators;
//# sourceMappingURL=swagger.decorator.js.map