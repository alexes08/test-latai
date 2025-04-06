import { EmployeeDetailDTO } from '@/modules/employee/types/employee-detail.dto';
import React from 'react';

interface Props {
  employeeDetail: EmployeeDetailDTO;
}

const EmployeeDetail: React.FC<Props> = ({ employeeDetail }) => (
  <h1 className="text-gray-500 dark:text-gray-400">{ employeeDetail.name }</h1>
)

export default EmployeeDetail;