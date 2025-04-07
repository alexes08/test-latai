import { EmployeeDetailDTO } from '@/modules/employee/types/employee-detail.dto';
import React from 'react';
import Image from 'next/image'
import { useEmployeeStore } from '@/store/employeeStore';

interface Props {
  employeeDetailItem: EmployeeDetailDTO;
}

const EmployeeDetail: React.FC<Props> = ({ employeeDetailItem }) => {
  const { toggleEmployeeFavorite } = useEmployeeStore();

  const toggleFavorite = () => {
    toggleEmployeeFavorite(employeeDetailItem.id);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 flex">
      <div style={{ position: "relative", width: `${300}px`, height: `${250}px` }}>
        <Image
            src={employeeDetailItem.companyLogo}
            alt={employeeDetailItem.name}
            fill
            style={{ objectFit: "contain" }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">{employeeDetailItem.name}</div>
        <p className="text-gray-500 text-base text-theme-sm dark:text-gray-400">{employeeDetailItem.email}</p>
        <p className="text-gray-500 text-base text-theme-sm dark:text-gray-400">{employeeDetailItem.phone}</p>
        <p className="text-gray-500 text-base text-theme-sm dark:text-gray-400">{employeeDetailItem.company}</p>
        <p className="text-gray-500 text-base text-theme-sm dark:text-gray-400">{employeeDetailItem.address}</p>
        <div className="pt-4 pb-2"
          onClick={toggleFavorite}
        >
          {employeeDetailItem.isFavorite ? (
            <svg className="fill-current text-yellow-500 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 .587l3.515 7.124 7.485.688-5.5 5.305 1.5 7.296L12 18.896l-6.5 3.204 1.5-7.296-5.5-5.305 7.485-.688L12 .587z"/>
            </svg>
          ) : (
            <svg className="fill-current text-gray-300 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 .587l3.515 7.124 7.485.688-5.5 5.305 1.5 7.296L12 18.896l-6.5 3.204 1.5-7.296-5.5-5.305 7.485-.688L12 .587z"/>
            </svg>
          )}
        </div>
      </div>
      
    </div>
  )

}

export default EmployeeDetail;