/// <reference types="@types/express" />
import { BookManagementService } from "./book_management.service";
import { CreateBookManagementDto } from "./dto/create-book_management.dto";
import { UpdateBookManagementDto } from "./dto/update-book_management.dto";
import { DeleteBookManagementDto } from "./dto/delete-book_management.dto";
import { GetBookManagementDto } from "./dto/get-book_management.dto";
import { ResponseService } from "../../common/response.service";
import { Request } from "express";
import { CommonService } from "../../common/common.service";
export declare class BookManagementController {
    private readonly bookManagementService;
    private readonly responseService;
    private readonly commonService;
    constructor(bookManagementService: BookManagementService, responseService: ResponseService, commonService: CommonService);
    addBook(req: Request, res: any, body: CreateBookManagementDto): Promise<void>;
    findAll(req: Request, res: any): Promise<void>;
    getBookById(req: Request, res: any, body: GetBookManagementDto): Promise<void>;
    updateBook(req: Request, res: any, body: UpdateBookManagementDto): Promise<void>;
    deleteBook(req: Request, res: any, body: DeleteBookManagementDto): Promise<void>;
}
