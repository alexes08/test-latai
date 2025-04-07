import { EmployeeDetailDTO } from "../types/employee-detail.dto";

type FetchUsersResponse = {
  results: EmployeeDetailDTO[];
};

export const fetchEmployees = async (): Promise<EmployeeDetailDTO[]> => {
  const url = 'https://randomuser.me/api/?results=10'; // Obtener 10 usuarios

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: FetchUsersResponse = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const employees = data.results.map((employeeData: any, index) => ({
      ...employeeData,
      name: `${employeeData.name.title} ${employeeData.name.first} ${employeeData.name.last}`,
      id: index,
      company: employeeData.id.name,
      address:  `${employeeData.location.street.name} ${employeeData.location.street.number} ${employeeData.location.city} ${employeeData.location.state} ${employeeData.location.country}`,
      companyLogo: employeeData.picture.medium
    }));
    
    return employees;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};