import { BookManagement } from "../../entities/book_management.entity";
import { Repository } from "typeorm";
export declare class BookManagementService {
    private bookManagement;
    constructor(bookManagement: Repository<BookManagement>);
    bookService(body: any): Promise<any>;
    bookListingService(): Promise<any>;
    bookUpdateService(body: any): Promise<any>;
    bookIdService(id: number): Promise<any>;
    deleteBookService(id: number): Promise<any>;
}
