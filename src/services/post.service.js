import axiosInstance from "../utility/axios";

export const getPosts = () =>
  axiosInstance.get("/posts").then((res) => res.data);

export const getPost = (id) =>
  axiosInstance.get(`/posts/${id}`).then((res) => res.data);

export const getComments = () =>
  axiosInstance.get("/comments").then((res) => res.data);
