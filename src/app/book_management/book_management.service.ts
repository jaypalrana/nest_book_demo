import { Injectable } from "@nestjs/common";
import { BookManagement } from "../../entities/book_management.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class BookManagementService {
  constructor(
    @InjectRepository(BookManagement)
    private bookManagement: Repository<BookManagement>
  ) {}

  async bookService(body: any): Promise<any> {
    try {
      const { title, isbn } = body;

      const data = await this.bookManagement.save({
        title: title,
        isbn: isbn,
      });
      console.log("data::", data);
    } catch (error) {
      throw error;
    }
  }

  async bookListingService(): Promise<any> {
    try {
      const getAllData = await this.bookManagement.find({
        where: { is_deleted: 0 },
      });
      return getAllData;
    } catch (error) {
      throw error;
    }
  }

  async bookUpdateService(body: any): Promise<any> {
    try {
      const { id, title } = body;

      const bookExist = await this.bookManagement.findOne({
        where: { id: id, is_deleted: 0 },
      });

      await this.bookManagement.update({ id: id }, { title: title });
      if (!bookExist) {
        throw new Error("NOT_FOUND");
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  async bookIdService(id: number): Promise<any> {
    try {
      const getBookData = await this.bookManagement.findOne({
        where: { id: id, is_deleted: 0 },
      });
      if (!getBookData) {
        throw new Error("NOT_FOUND");
      }
      return getBookData;
    } catch (error) {
      throw error;
    }
  }

  async deleteBookService(id: number): Promise<any> {
    try {
      const data = await this.bookManagement.update(
        { id: id, is_deleted: 0 },
        { is_deleted: 1 }
      );

      if (!data.affected) {
        throw new Error("NOT_FOUND");
      }
    } catch (error) {
      throw error;
    }
  }
}
