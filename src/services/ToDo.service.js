import axiosInstance from "../utility/axios";

export const getToDos = () =>
  axiosInstance.get("/todos").then((res) => res.data);

export const getToDo = (id) =>
  axiosInstance.get(`/todos/${id}`).then((res) => res.data);
