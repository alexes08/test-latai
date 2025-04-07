"use client"

import React, { useEffect } from 'react';
import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";

import EmployeeTable from '@/modules/employee/components/employeeTable';
import { fetchEmployees } from '@/modules/employee/services/employeeService';
import { useEmployeeStore } from '@/store/employeeStore';

  export default function Employees () {

  const { employees, setEmployees } = useEmployeeStore();

  const [searchTerm, setSearchTerm] = React.useState('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortEmployees = () => {
    const sortedEmployees = [...employees].sort((a, b) => a.name.localeCompare(b.name));
    setEmployees(sortedEmployees);
  };

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
            <div
            className='w-full flex justify-end'
            >
              <input
                type="text"
                placeholder="Buscar empleado"
                value={searchTerm}
                onChange={handleSearchChange}
                className="border rounded p-2 border-black dark:border-white dark:text-white"
              />
              <button
                onClick={sortEmployees}
                className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Ordenar
              </button>
            </div>
            <EmployeeTable employees={filteredEmployees} />
          </ComponentCard>
        </div>
      </div>
  );
}