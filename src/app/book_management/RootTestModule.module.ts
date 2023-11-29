import { Module } from '@nestjs/common';
import { ResponseService } from '../../common/response.service';
import { BookManagementController } from './book_management.controller';
import { BookManagementService } from './book_management.service';
import { BookManagement } from '../../entities/book_management.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookManagement]),
  ],
  controllers: [BookManagementController],
  providers: [BookManagementService, ResponseService, BookManagement],
  exports: [TypeOrmModule],
})
export class RootTestModule {}
