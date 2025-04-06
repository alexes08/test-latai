"use client"

import React, { useEffect, useState } from 'react';
import { useParams  } from 'next/navigation';
import Link from 'next/link';

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ComponentCard from "@/components/common/ComponentCard";
import EmployeeDetail from '@/modules/employee/components/employeeDetail';

import { useEmployeeStore } from '@/store/employeeStore';
import { EmployeeDetailDTO } from '@/modules/employee/types/employee-detail.dto';


export default function EmployeeDetailPage() {

  const params = useParams<{ id: string }>()

  const id = parseInt(params.id, 0);
  const [employeeDetail, setEmployeeDetail] = useState<EmployeeDetailDTO | null>(null);
  const { employees } = useEmployeeStore();

  useEffect(() => {
    const employee = employees.find(emp => emp.id === id);
    setEmployeeDetail(employee ? employee : null);
    console.log("id is number: ", id)
  }, [id, employees]);

  if (!employeeDetail) return <p>Cargando... {id}</p>;

  return (
    <div>
      <PageBreadcrumb pageTitle="Empleados" />
      <div className="space-y-6">
        <ComponentCard title="Detalle del empleado">
          <div className="flex justify-end py-4">
            <Link href={`/employees`}>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Atrás
              </button>
            </Link>
          </div>
          <EmployeeDetail employeeDetail={employeeDetail} />
        </ComponentCard>
      </div>
    </div>
  );
}