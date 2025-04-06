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
    const employees = data.results.map((user, index) => ({
      ...user,
      name: `${user.name.title} ${user.name.first} ${user.name.last}`,
      id: index,
      company: user.id.name,
      address:  `${user.location.street.name} ${user.location.street.number} ${user.location.city} ${user.location.state} ${user.location.country}`,
      companyLogo: user.picture.medium
    }));
    
    return employees;
  } catch (error) {
    console.error('Error fetching data: ', error);
    throw error;
  }
};