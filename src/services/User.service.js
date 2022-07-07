import axiosInstance from "../utility/axios";

  export const getUsers = () =>
  axiosInstance.get("/users").then((res) => res.data);

  export const getUsersDetails = (id) =>
  axiosInstance.get(`/users/${id}`).then((res) => res.data);