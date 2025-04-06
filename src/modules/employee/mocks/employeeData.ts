import { EmployeeDetailDTO } from '@/modules/employee/types/employee-detail.dto';

const employeeData: EmployeeDetailDTO[] = [
  {
    id: 1,
    name: "Juan Pérez",
    email: "juan.perez@example.com",
    phone: "1234567890",
    company: "Empresa A",
    address: "Calle Falsa 123",
    companyLogo: "logo-empresa-a.png"
  },
  {
    id: 2,
    name: "Ana Gómez",
    email: "ana.gomez@example.com",
    phone: "0987654321",
    company: "Empresa B",
    address: "Avenida Siempre Viva 456",
    companyLogo: "logo-empresa-b.png"
  }
];

export default employeeData;