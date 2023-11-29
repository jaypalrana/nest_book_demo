import { Module } from '@nestjs/common';
import { BookManagementService } from './book_management.service';
import { BookManagementController } from './book_management.controller';
import { JwtService } from '@nestjs/jwt';
import { ResponseService } from '../../common/response.service';
import { NonAuthHeader } from '../../guard/nonAuth.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookManagement } from '../../entities/book_management.entity';
import { CommonService } from '../../common/common.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([BookManagement]),
    // TypeOrmModule.forFeature([UserDeviceRelation]),
  ],
  controllers: [BookManagementController],
  providers: [BookManagementService,ResponseService,CommonService],
  exports: [TypeOrmModule],
})
export class BookManagementModule {}
