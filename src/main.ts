import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { ValidationExceptionFilter } from "./common/validation-exception.filter";
import * as express from "express";
import * as compression from "compression";

import {
  ExpressAdapter,
  NestExpressApplication,
} from "@nestjs/platform-express";

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

  app.setGlobalPrefix("api/v1");

  const validationOptions = {
    whitelist: true,
  };
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.useGlobalFilters(new ValidationExceptionFilter());

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  await app.listen(process.env.PORT);
}
bootstrap();
