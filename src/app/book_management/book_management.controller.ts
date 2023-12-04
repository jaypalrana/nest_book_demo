import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Req,
  Res,
  Put,
  Param,
} from "@nestjs/common";
import { BookManagementService } from "./book_management.service";
import { CreateBookManagementDto } from "./dto/create-book_management.dto";
import { UpdateBookManagementDto } from "./dto/update-book_management.dto";
import { ResponseService } from "../../common/response.service";
import { Request, Response } from "express";
import { CommonService } from "../../common/common.service";

@Controller("book-management")
export class BookManagementController {
  constructor(
    private readonly bookManagementService: BookManagementService,
    private readonly responseService: ResponseService,
    private readonly commonService: CommonService
  ) {}

  @Post("/add-book")
  async addBook(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: CreateBookManagementDto
  ) {
    try {
      const checkISBN = await this.commonService.validateISBN(body.isbn);

      if (!checkISBN) {
        throw new Error("INVALID_ISBN");
      }

      await this.bookManagementService.bookService(req.body);

      const data = true;
      this.responseService.success(res, "BOOK_ADDED", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/get-book")
  async findAll(@Req() req: Request, @Res() res: Response) {
    try {
      const data = await this.bookManagementService.bookListingService();
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/book-id/:id")
  async getBookById(
    @Param("id") id: number,
    @Req() req: Request,
    @Res() res: Response
  ) {
    try {
      const data = await this.bookManagementService.bookIdService(+id);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Put("/update-book")
  async updateBook(
    @Req() req: Request,
    @Res() res: Response,
    @Body() body: UpdateBookManagementDto
  ) {
    try {
      const data = await this.bookManagementService.bookUpdateService(body);
      this.responseService.success(res, "BOOK_DETAILS_UPDATED", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }

  @Delete("/delete-book/:id")
  async deleteBook(
    @Param("id") id: number,
    @Req() req: Request,
    @Res() res: Response
  ) {
    try {
      const data = await this.bookManagementService.deleteBookService(+id);
      this.responseService.success(res, "BOOK_DETAILS_DELETED", data);
    } catch (error) {
      this.responseService.error(req, res, error.message);
    }
  }
}
