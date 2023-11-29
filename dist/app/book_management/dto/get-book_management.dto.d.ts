import { CreateBookManagementDto } from './create-book_management.dto';
declare const GetBookManagementDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookManagementDto>>;
export declare class GetBookManagementDto extends GetBookManagementDto_base {
    bookId: number;
}
export {};
