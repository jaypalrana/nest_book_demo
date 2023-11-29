import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsDefined } from 'class-validator';
import { CreateBookManagementDto } from './create-book_management.dto';

export class UpdateBookManagementDto extends PartialType(CreateBookManagementDto) {

    @IsDefined()
    bookId: number;

    @IsOptional()
    title: string;
}
