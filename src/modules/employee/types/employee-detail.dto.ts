import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { EmployeeDTO } from "./employee.dto";

export class EmployeeDetailDTO extends EmployeeDTO {
  address!: string;
  companyLogo!: string | StaticImport;
  isFavorite: boolean | undefined;
}