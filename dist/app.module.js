"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const response_service_1 = require("./common/response.service");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const core_1 = require("@nestjs/core");
const book_management_module_1 = require("./app/book_management/book_management.module");
const database_config_1 = require("./config/database.config");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logger_middleware_1.LoggerMiddleware).forRoutes("*");
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [
            response_service_1.ResponseService,
            common_1.Logger,
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
        ],
        imports: [typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig), book_management_module_1.BookManagementModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map