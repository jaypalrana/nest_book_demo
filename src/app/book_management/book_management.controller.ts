import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UnauthorizedException,
  Put,
} from "@nestjs/common";
import { BookManagementService } from "./book_management.service";
import { CreateBookManagementDto } from "./dto/create-book_management.dto";
import { UpdateBookManagementDto } from "./dto/update-book_management.dto";
import { DeleteBookManagementDto } from "./dto/delete-book_management.dto";
import { GetBookManagementDto } from "./dto/get-book_management.dto";
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
    @Res() res,
    @Body() body: CreateBookManagementDto
  ) {
    try {
      console.log("req.bodyy::", req.body);
      const checkISBN = await this.commonService.validateISBN(body.isbn);
      console.log("check:::", checkISBN);

      if (checkISBN == false) {
        throw new UnauthorizedException("INVALID_ISBN");
      }

      await this.bookManagementService.bookService(req.body);

      const data = true;
      this.responseService.success(res, "BOOK_ADDED", data);
    } catch (error) {
      console.log("error", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/get-book")
  async findAll(@Req() req: Request, @Res() res) {
    try {
      const data = await this.bookManagementService.bookListingService();
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      console.log("error", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Get("/book-id")
  async getBookById(
    @Req() req: Request,
    @Res() res,
    @Body() body: GetBookManagementDto
  ) {
    try {
      const data = await this.bookManagementService.bookIdService(body);

      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      console.log("error", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Put("/update-book")
  async updateBook(
    @Req() req: Request,
    @Res() res,
    @Body() body: UpdateBookManagementDto
  ) {
    try {
      const data = await this.bookManagementService.bookUpdateService(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      console.log("error", error);
      this.responseService.error(req, res, error.message);
    }
  }

  @Delete("/delete-book")
  async deleteBook(
    @Req() req: Request,
    @Res() res,
    @Body() body: DeleteBookManagementDto
  ) {
    try {
      const data = await this.bookManagementService.deleteBookService(body);
      this.responseService.success(res, "SUCCESS", data);
    } catch (error) {
      console.log("error", error);
      this.responseService.error(req, res, error.message);
    }
  }

}
