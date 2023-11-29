"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManagementService = void 0;
const common_1 = require("@nestjs/common");
const book_management_entity_1 = require("../../entities/book_management.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const moment = require("moment-timezone");
const now = moment().format("YYYY-MM-DD HH:mm:ss.SSS");
let BookManagementService = class BookManagementService {
    constructor(bookManagement) {
        this.bookManagement = bookManagement;
    }
    async bookService(body) {
        try {
            const { title, isbn } = body;
            const data = await this.bookManagement.save({
                title: title,
                isbn: isbn,
            });
            console.log("data::", data);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
    async bookListingService() {
        try {
            const getAllData = await this.bookManagement.find({ where: { deletedAt: null } });
            console.log("getAll::", getAllData);
            return getAllData;
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
    async bookUpdateService(body) {
        try {
            console.log("body", body);
            const { bookId, title } = body;
            let bookExist = await this.bookManagement.findOne({
                where: { bookId: bookId, deletedAt: null }
            });
            if (Boolean(bookExist)) {
                await this.bookManagement.update({ bookId: bookId }, { title: title });
            }
            else {
                throw "NOT_FOUND";
            }
            return true;
        }
        catch (error) {
            console.log("error::", error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async bookIdService(body) {
        try {
            const { bookId } = body;
            const getBookData = await this.bookManagement.findOne({
                where: { bookId: bookId, deletedAt: null },
            });
            console.log("gets::", getBookData);
            if (Boolean(getBookData) == false) {
                throw "NOT_FOUND";
            }
            return getBookData;
        }
        catch (error) {
            console.log("error::", error);
            throw new common_1.UnauthorizedException(error);
        }
    }
    async deleteBookService(body) {
        try {
            const { bookId } = body;
            const data = await this.bookManagement.update({ bookId: bookId, deletedAt: null }, { deletedAt: now });
            if (data.affected == 1) {
                return true;
            }
            else {
                throw "NOT_FOUND";
            }
        }
        catch (error) {
            console.log("error::", error);
            throw new common_1.UnauthorizedException(error);
        }
    }
};
exports.BookManagementService = BookManagementService;
exports.BookManagementService = BookManagementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(book_management_entity_1.BookManagement)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookManagementService);
//# sourceMappingURL=book_management.service.js.map