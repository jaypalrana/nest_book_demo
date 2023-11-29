"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootTestModule = void 0;
const common_1 = require("@nestjs/common");
const response_service_1 = require("../../common/response.service");
const book_management_controller_1 = require("./book_management.controller");
const book_management_service_1 = require("./book_management.service");
const book_management_entity_1 = require("../../entities/book_management.entity");
const typeorm_1 = require("@nestjs/typeorm");
let RootTestModule = class RootTestModule {
};
exports.RootTestModule = RootTestModule;
exports.RootTestModule = RootTestModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([book_management_entity_1.BookManagement]),
        ],
        controllers: [book_management_controller_1.BookManagementController],
        providers: [book_management_service_1.BookManagementService, response_service_1.ResponseService, book_management_entity_1.BookManagement],
        exports: [typeorm_1.TypeOrmModule],
    })
], RootTestModule);
//# sourceMappingURL=RootTestModule.module.js.map