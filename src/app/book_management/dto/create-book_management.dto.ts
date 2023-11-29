import { IsDefined, IsNotEmpty } from "class-validator";

export class CreateBookManagementDto {
  @IsDefined()
  @IsNotEmpty()
  title: string;

  @IsDefined()
  @IsNotEmpty()
  isbn: string;
}
