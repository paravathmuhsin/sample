import axiosInstance from "../utility/axios";

export const getcomments = () =>
  axiosInstance.get("/comments").then((res) => res.data);

export const getComments = (id) =>
  axiosInstance.get(`/comments/${id}`).then((res) => res.data);
