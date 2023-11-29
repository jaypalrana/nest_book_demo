"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonService = void 0;
class CommonService {
    async validateISBN(isbn) {
        const sanitizedISBN = isbn.replace(/[-\s]/g, '');
        if (sanitizedISBN.length === 10) {
            const regex = /^(?:\d{9}[\dXx])$/;
            return regex.test(sanitizedISBN);
        }
        if (sanitizedISBN.length === 13) {
            const regex = /^(?:\d{13})$/;
            return regex.test(sanitizedISBN);
        }
        return false;
    }
}
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map