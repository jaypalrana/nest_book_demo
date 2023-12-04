"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const validation_exception_filter_1 = require("./common/validation-exception.filter");
const express = require("express");
const compression = require("compression");
const platform_express_1 = require("@nestjs/platform-express");
async function bootstrap() {
    const server = express();
    server.use(compression());
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.enableCors({
        allowedHeaders: "*",
        origin: "*",
        credentials: true,
    });
    app.setGlobalPrefix("api/v1");
    const validationOptions = {
        whitelist: true,
    };
    app.useGlobalPipes(new common_1.ValidationPipe(validationOptions));
    app.useGlobalFilters(new validation_exception_filter_1.ValidationExceptionFilter());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map