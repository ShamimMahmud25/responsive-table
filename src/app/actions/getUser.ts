import { rowData } from "../data"
export const getUserList =(perPage:number,pageNumber:number)=>{
    // here we call api, for now giving mock response.
    const startIndex = (pageNumber - 1) * perPage;
    const endIndex = startIndex + perPage;
    const totalUser = rowData.length;
    return {
        userListData: rowData.slice(startIndex, endIndex),
        totalUser
    }
}