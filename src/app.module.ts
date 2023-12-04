import { ResponseService } from "./common/response.service";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import { APP_PIPE } from "@nestjs/core";
import { BookManagementModule } from "./app/book_management/book_management.module";
import { databaseConfig } from "./config/database.config";
import { TypeOrmModule } from "@nestjs/typeorm";
import {
  Logger,
  MiddlewareConsumer,
  Module,
  ValidationPipe,
} from "@nestjs/common";

@Module({
  controllers: [],
  providers: [
    ResponseService,
    Logger,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  imports: [TypeOrmModule.forRoot(databaseConfig), BookManagementModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
