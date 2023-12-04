import { CreateBookManagementDto } from "./create-book_management.dto";
declare const UpdateBookManagementDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookManagementDto>>;
export declare class UpdateBookManagementDto extends UpdateBookManagementDto_base {
    id: number;
    title: string;
}
export {};
