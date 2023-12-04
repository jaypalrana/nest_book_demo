import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsDefined, IsNotEmpty } from "class-validator";
import { CreateBookManagementDto } from "./create-book_management.dto";

export class UpdateBookManagementDto extends PartialType(
  CreateBookManagementDto
) {
  @IsDefined()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  title: string;
}
