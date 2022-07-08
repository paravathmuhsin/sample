import axiosInstance from "../utility/axios";

export const getComments =()=>
axiosInstance.get('/comments').then((res)=>res.data);
