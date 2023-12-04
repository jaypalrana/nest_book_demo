export class CommonService {
  async validateISBN(isbn: string) {
    const sanitizedISBN: string = isbn.replace(/[-\s]/g, "");

    if (sanitizedISBN.length === 10) {
      const regex: RegExp = /^(?:\d{9}[\dXx])$/;
      return regex.test(sanitizedISBN);
    }

    if (sanitizedISBN.length === 13) {
      const regex: RegExp = /^(?:\d{13})$/;
      return regex.test(sanitizedISBN);
    }

    return false;
  }
}
