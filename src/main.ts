import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { json } from "body-parser";
import { ValidationExceptionFilter } from "./common/validation-exception.filter";
import * as express from "express";
import * as compression from "compression";
import * as expressEjsLayouts from "express-ejs-layouts";
import { Request, Response } from "express";

import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";
import { SwaggerConfig } from "./config/swagger.config";
import { resolve } from "path";

async function bootstrap() {
  const server = express();
  server.use(compression());
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(server)
  );

  app.enableCors({
    allowedHeaders: "*",
    origin: "*",
    credentials: true,
  });
  app.use(json({ limit: "15mb" }));

  server.get("/health", (req: Request, res: Response) => {
    res.send("success");
  });

  app.useStaticAssets(resolve("./public"));
  app.use(express.static("public"));

  const expressApp = app.getHttpAdapter().getInstance();
  expressApp.set("view engine", "ejs"); // Specify the view engine as 'ejs'
  expressApp.set("views", "src/views");

  app.setGlobalPrefix("api/v1");

  app.set("view engine", "ejs");

  // Enable Express EJS layouts
  app.use(expressEjsLayouts);

  const document = SwaggerModule.createDocument(app, SwaggerConfig);
  SwaggerModule.setup("api", app, document);

  // Enable ValidationPipe globally
  const validationOptions = {
    whitelist: true, // Automatically remove properties that are not decorated with validation decorators
  };
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalFilters(new ValidationExceptionFilter());

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  await app.listen(process.env.PORT);
}
bootstrap();
