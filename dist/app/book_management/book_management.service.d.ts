import { BookManagement } from "../../entities/book_management.entity";
import { Repository } from "typeorm";
export declare class BookManagementService {
    private bookManagement;
    constructor(bookManagement: Repository<BookManagement>);
    bookService(body: any): Promise<void>;
    bookListingService(): Promise<BookManagement[]>;
    bookUpdateService(body: any): Promise<boolean>;
    bookIdService(body: any): Promise<BookManagement>;
    deleteBookService(body: any): Promise<boolean>;
}
