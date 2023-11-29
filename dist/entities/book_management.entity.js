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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManagement = void 0;
const typeorm_1 = require("typeorm");
let BookManagement = class BookManagement {
};
exports.BookManagement = BookManagement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BookManagement.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying" }),
    __metadata("design:type", String)
], BookManagement.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "character varying" }),
    __metadata("design:type", String)
], BookManagement.prototype, "isbn", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
        select: true,
    }),
    __metadata("design:type", Date)
], BookManagement.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamptz",
        default: () => "CURRENT_TIMESTAMP",
        select: true,
    }),
    __metadata("design:type", Date)
], BookManagement.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        type: "timestamptz",
        nullable: true,
        select: true,
    }),
    __metadata("design:type", Date)
], BookManagement.prototype, "deletedAt", void 0);
exports.BookManagement = BookManagement = __decorate([
    (0, typeorm_1.Entity)()
], BookManagement);
//# sourceMappingURL=book_management.entity.js.map