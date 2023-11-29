import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsDefined, IsNotEmpty } from 'class-validator';
import { CreateBookManagementDto } from './create-book_management.dto';

export class DeleteBookManagementDto extends PartialType(CreateBookManagementDto) {

    @IsDefined()
    @IsNotEmpty()
    bookId: number;

}