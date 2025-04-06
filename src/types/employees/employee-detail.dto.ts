import { EmployeeDTO } from "./employee.dto";

export class EmployeeDetailDTO extends EmployeeDTO {
  address!: string;
  companyLogo: string | undefined;
}