import axiosInstance from "../utility/axios";

export const getPosts = () =>
  axiosInstance.get("/posts").then((res) => res.data);

export const getPost = (id) =>
  axiosInstance.get(`/posts/${id}`).then((res) => res.data);

  export const getUsers = () =>
  axiosInstance.get("/users").then((res) => res.data);
