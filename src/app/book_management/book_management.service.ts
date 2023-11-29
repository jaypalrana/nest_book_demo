import { Injectable, UnauthorizedException } from "@nestjs/common";
import { CreateBookManagementDto } from "./dto/create-book_management.dto";
import { UpdateBookManagementDto } from "./dto/update-book_management.dto";
import { BookManagement } from "../../entities/book_management.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { title } from "process";

const moment = require("moment-timezone");
const now = moment().format("YYYY-MM-DD HH:mm:ss.SSS");

@Injectable()
export class BookManagementService {
  constructor(
    @InjectRepository(BookManagement)
    private bookManagement: Repository<BookManagement>
  ) {}
 
  async bookService(body) {
    try {
      const { title, isbn } = body;

      const data = await this.bookManagement.save({
        title: title,
        isbn: isbn,
      });
      console.log("data::", data);
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async bookListingService() {
    try {
      const getAllData = await this.bookManagement.find({where: {deletedAt: null}});
      console.log("getAll::", getAllData);
      return getAllData;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }

  async bookUpdateService(body) {
    try {
      console.log("body", body);

      const { bookId, title } = body;

      let bookExist = await this.bookManagement.findOne({
        where: { bookId: bookId,deletedAt: null }
      });

      if (Boolean(bookExist)) {
        await this.bookManagement.update({ bookId: bookId }, { title: title });
      } else {
        throw "NOT_FOUND";
      }

      return true;
    } catch (error) {
      console.log("error::", error);

      throw new UnauthorizedException(error);
    }
  }

  async bookIdService(body) {
    try {

      const {bookId} = body

      const getBookData = await this.bookManagement.findOne({
        where: { bookId: bookId,deletedAt: null },
      });
      console.log("gets::", getBookData);
      if (Boolean(getBookData) == false) {
        throw "NOT_FOUND";
      }
      return getBookData;
    } catch (error) {
      console.log("error::", error);

      throw new UnauthorizedException(error);
    }
  }

  async deleteBookService(body) {
    try {

      const {bookId} = body

      const data = await this.bookManagement.update({bookId: bookId,deletedAt: null },{deletedAt: now});

      if(data.affected == 1){
        return true
      }
      else{
        throw "NOT_FOUND"
      }
    } catch (error) {
      console.log("error::", error);
      throw new UnauthorizedException(error);
    }
  }
}
