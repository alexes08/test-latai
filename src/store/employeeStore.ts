import { create } from 'zustand';
import { EmployeeDetailDTO } from "@/modules/employee/types/employee-detail.dto";

type EmployeeState = {
  employees: EmployeeDetailDTO[];
  setEmployees: (employees: EmployeeDetailDTO[]) => void;
  toggleEmployeeFavorite: (id: number) => void;
};

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],

  setEmployees: (employees: EmployeeDetailDTO[] ) => set({ employees }),

  toggleEmployeeFavorite: (id: number) => set((state) => ({
    employees: state.employees.map((employee) =>
      employee.id === id ? { ...employee, isFavorite: !employee.isFavorite } : employee
    ),
  })),

}));