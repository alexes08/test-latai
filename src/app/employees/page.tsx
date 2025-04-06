"use client"

import React, { useEffect } from 'react';
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

import EmployeeTable from '@/modules/employee/components/employeeTable';
import { fetchEmployees } from '@/modules/employee/services/employeeService';
import { useEmployeeStore } from '@/store/employeeStore';

  export default function Employees () {

  const { employees, setEmployees } = useEmployeeStore();

  useEffect(() => {
    // Solo carga los empleados si el array está vacío para evitar cargas innecesarias
    if (employees.length === 0) {
      fetchEmployees().then(data => {
        setEmployees(data);
      }).catch(error => {
        console.error('Failed to fetch employees:', error);
      });
    }
  }, [employees, setEmployees]);

  return (
      <div>
        <PageBreadcrumb pageTitle="Empleados" />
        <div className="space-y-6">
          <ComponentCard title="Lista de empleados">
            <EmployeeTable employees={employees} />
          </ComponentCard>
        </div>
      </div>
  );
}