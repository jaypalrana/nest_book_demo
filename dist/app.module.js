"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const response_service_1 = require("./common/response.service");
const database_config_1 = require("./config/database.config");
const multer_config_1 = require("./config/multer.config");
const platform_express_1 = require("@nestjs/platform-express");
const logger_middleware_1 = require("./middlewares/logger.middleware");
const core_1 = require("@nestjs/core");
const serve_static_module_1 = require("@nestjs/serve-static/dist/serve-static.module");
const path_1 = require("path");
const book_management_module_1 = require("./app/book_management/book_management.module");
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
        imports: [
            typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
            platform_express_1.MulterModule.register(multer_config_1.MulterConfig),
            book_management_module_1.BookManagementModule,
            serve_static_module_1.ServeStaticModule.forRoot({
                serveRoot: "/uploads",
                rootPath: (0, path_1.join)(__dirname, "..", "/uploads"),
            }),
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map