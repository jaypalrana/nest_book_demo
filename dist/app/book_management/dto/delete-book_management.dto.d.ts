import { CreateBookManagementDto } from './create-book_management.dto';
declare const DeleteBookManagementDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookManagementDto>>;
export declare class DeleteBookManagementDto extends DeleteBookManagementDto_base {
    bookId: number;
}
export {};
