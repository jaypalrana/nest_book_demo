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
            throw error;
        }
    }
    async bookListingService() {
        try {
            const getAllData = await this.bookManagement.find({
                where: { is_deleted: 0 },
            });
            return getAllData;
        }
        catch (error) {
            throw error;
        }
    }
    async bookUpdateService(body) {
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
        }
        catch (error) {
            throw error;
        }
    }
    async bookIdService(id) {
        try {
            const getBookData = await this.bookManagement.findOne({
                where: { id: id, is_deleted: 0 },
            });
            if (!getBookData) {
                throw new Error("NOT_FOUND");
            }
            return getBookData;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteBookService(id) {
        try {
            const data = await this.bookManagement.update({ id: id, is_deleted: 0 }, { is_deleted: 1 });
            if (!data.affected) {
                throw new Error("NOT_FOUND");
            }
        }
        catch (error) {
            throw error;
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