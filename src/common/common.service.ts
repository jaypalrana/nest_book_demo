export class CommonService {
    async validateISBN(isbn: string){
        // Remove hyphens and spaces from the provided ISBN
        const sanitizedISBN: string = isbn.replace(/[-\s]/g, '');
      
        // Validate ISBN-10
        if (sanitizedISBN.length === 10) {
          const regex: RegExp = /^(?:\d{9}[\dXx])$/;
          return regex.test(sanitizedISBN);
        }
      
        // Validate ISBN-13
        if (sanitizedISBN.length === 13) {
          const regex: RegExp = /^(?:\d{13})$/;
          return regex.test(sanitizedISBN);
        }
      
        // Invalid length for ISBN
        return false;
      }
}
