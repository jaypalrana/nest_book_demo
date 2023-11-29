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
exports.BookManagementController = void 0;
const common_1 = require("@nestjs/common");
const book_management_service_1 = require("./book_management.service");
const create_book_management_dto_1 = require("./dto/create-book_management.dto");
const update_book_management_dto_1 = require("./dto/update-book_management.dto");
const delete_book_management_dto_1 = require("./dto/delete-book_management.dto");
const get_book_management_dto_1 = require("./dto/get-book_management.dto");
const response_service_1 = require("../../common/response.service");
const common_service_1 = require("../../common/common.service");
let BookManagementController = class BookManagementController {
    constructor(bookManagementService, responseService, commonService) {
        this.bookManagementService = bookManagementService;
        this.responseService = responseService;
        this.commonService = commonService;
    }
    async addBook(req, res, body) {
        try {
            console.log("req.bodyy::", req.body);
            const checkISBN = await this.commonService.validateISBN(body.isbn);
            console.log("check:::", checkISBN);
            if (checkISBN == false) {
                throw new common_1.UnauthorizedException("INVALID_ISBN");
            }
            await this.bookManagementService.bookService(req.body);
            const data = true;
            this.responseService.success(res, "BOOK_ADDED", data);
        }
        catch (error) {
            console.log("error", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async findAll(req, res) {
        try {
            const data = await this.bookManagementService.bookListingService();
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            console.log("error", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async getBookById(req, res, body) {
        try {
            const data = await this.bookManagementService.bookIdService(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            console.log("error", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async updateBook(req, res, body) {
        try {
            const data = await this.bookManagementService.bookUpdateService(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            console.log("error", error);
            this.responseService.error(req, res, error.message);
        }
    }
    async deleteBook(req, res, body) {
        try {
            const data = await this.bookManagementService.deleteBookService(body);
            this.responseService.success(res, "SUCCESS", data);
        }
        catch (error) {
            console.log("error", error);
            this.responseService.error(req, res, error.message);
        }
    }
};
exports.BookManagementController = BookManagementController;
__decorate([
    (0, common_1.Post)("/add-book"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, create_book_management_dto_1.CreateBookManagementDto]),
    __metadata("design:returntype", Promise)
], BookManagementController.prototype, "addBook", null);
__decorate([
    (0, common_1.Get)("/get-book"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookManagementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/book-id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, get_book_management_dto_1.GetBookManagementDto]),
    __metadata("design:returntype", Promise)
], BookManagementController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Put)("/update-book"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, update_book_management_dto_1.UpdateBookManagementDto]),
    __metadata("design:returntype", Promise)
], BookManagementController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)("/delete-book"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, delete_book_management_dto_1.DeleteBookManagementDto]),
    __metadata("design:returntype", Promise)
], BookManagementController.prototype, "deleteBook", null);
exports.BookManagementController = BookManagementController = __decorate([
    (0, common_1.Controller)("book-management"),
    __metadata("design:paramtypes", [book_management_service_1.BookManagementService,
        response_service_1.ResponseService,
        common_service_1.CommonService])
], BookManagementController);
//# sourceMappingURL=book_management.controller.js.map