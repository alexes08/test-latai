import { create } from 'zustand';
import { EmployeeDetailDTO } from "@/modules/employee/types/employee-detail.dto";

type EmployeeState = {
  employees: EmployeeDetailDTO[];
  setEmployees: (employees: EmployeeDetailDTO[]) => void;
};

export const useEmployeeStore = create<EmployeeState>((set) => ({
  employees: [],
  setEmployees: (employees: EmployeeDetailDTO[] ) => set({ employees })
}));