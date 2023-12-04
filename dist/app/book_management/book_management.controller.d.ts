/// <reference types="@types/express" />
import { BookManagementService } from "./book_management.service";
import { CreateBookManagementDto } from "./dto/create-book_management.dto";
import { UpdateBookManagementDto } from "./dto/update-book_management.dto";
import { ResponseService } from "../../common/response.service";
import { Request, Response } from "express";
import { CommonService } from "../../common/common.service";
export declare class BookManagementController {
    private readonly bookManagementService;
    private readonly responseService;
    private readonly commonService;
    constructor(bookManagementService: BookManagementService, responseService: ResponseService, commonService: CommonService);
    addBook(req: Request, res: Response, body: CreateBookManagementDto): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    getBookById(id: number, req: Request, res: Response): Promise<void>;
    updateBook(req: Request, res: Response, body: UpdateBookManagementDto): Promise<void>;
    deleteBook(id: number, req: Request, res: Response): Promise<void>;
}
