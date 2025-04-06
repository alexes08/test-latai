import React from 'react';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import EmployeeDetail from '@/components/employee/employeeDetail';
import employeeData from '@/mocks/employeeData';

export default async function EmployeeDetailPage({
  params
}: {
  params: Promise<{ id: number }>
}) {

  const { id } = await params

  return (
    <div>
      <PageBreadcrumb pageTitle="Empleados" />
      <div className="space-y-6">
        <ComponentCard title="Detalle del empleado">
          <div className="flex justify-end py-4">
            <a href="/employees" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Atrás
            </a>
          </div>
          <EmployeeDetail employeeDetail={employeeData[id-1]} />
        </ComponentCard>
      </div>
    </div>
  );
}