import { rowData } from "../data";
export const getUserList = (
  perPage: number,
  pageNumber: number,
  filterData: string
) => {
  // here we call api, for now giving mock response.
  let filteredUsers = rowData;
  if (filterData) {
    const searchData = filterData.toLocaleLowerCase();
    filteredUsers = rowData.filter(
      (item) =>
        item.name.toLowerCase().includes(searchData) ||
        item.company.toLowerCase().includes(searchData) ||
        item.email.toLowerCase().includes(searchData) ||
        item.address.toLowerCase().includes(searchData) ||
        item.gender.toLowerCase() === searchData ||
        item.phone.toLowerCase().includes(searchData) ||
        item.id === filterData ||
        item.age === parseInt(filterData)
    );
  }
  const startIndex = (pageNumber - 1) * perPage;
  const endIndex = startIndex + perPage;
  const totalUser = filteredUsers.length;
  return {
    userListData: filteredUsers.slice(startIndex, endIndex),
    totalUser,
  };
};
