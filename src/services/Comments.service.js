import axiosInstance from "../utility/axios";

  export const getComments = () =>
  axiosInstance.get("/comments").then((res) => res.data);

  export const getCommentsDetails = (id) =>
  axiosInstance.get(`/comments/${id}`).then((res) => res.data);