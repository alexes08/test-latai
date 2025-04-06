import React from 'react';
import EmployeeTable from '@/components/employee/employeeTable';
import employeeData from '../../../mocks/employeeData';
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

export default function Employees() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Empleados" />
      <div className="space-y-6">
        <ComponentCard title="Lista de empleados">
          <EmployeeTable employees={employeeData} />
        </ComponentCard>
      </div>
    </div>
  );
}