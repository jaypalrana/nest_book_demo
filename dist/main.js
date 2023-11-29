"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const body_parser_1 = require("body-parser");
const validation_exception_filter_1 = require("./common/validation-exception.filter");
const express = require("express");
const compression = require("compression");
const expressEjsLayouts = require("express-ejs-layouts");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_config_1 = require("./config/swagger.config");
const path_1 = require("path");
async function bootstrap() {
    const server = express();
    server.use(compression());
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.enableCors({
        allowedHeaders: "*",
        origin: "*",
        credentials: true,
    });
    app.use((0, body_parser_1.json)({ limit: "15mb" }));
    server.get("/health", (req, res) => {
        res.send("success");
    });
    app.useStaticAssets((0, path_1.resolve)("./public"));
    app.use(express.static("public"));
    const expressApp = app.getHttpAdapter().getInstance();
    expressApp.set("view engine", "ejs");
    expressApp.set("views", "src/views");
    app.setGlobalPrefix("api/v1");
    app.set("view engine", "ejs");
    app.use(expressEjsLayouts);
    const document = swagger_1.SwaggerModule.createDocument(app, swagger_config_1.SwaggerConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
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