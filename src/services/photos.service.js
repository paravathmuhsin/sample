import axiosInstance from "../utility/axios";

export const getPhotos = () =>
  axiosInstance.get("/photos").then((res) => res.data);

export const getToDo = (id) =>
  axiosInstance.get(`/photos/${id}`).then((res) => res.data);