import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Fallback from "../../components/Fallback/Fallback";
import Layout from "../Layout/Layout";

const Home = React.lazy(() => import("../../containers/Home/Home"));
const PostDetails = React.lazy(() =>
  import("../../containers/Home/PostDetails")
);
const Login = React.lazy(() => import("../../containers/Login/Login"));
const ToDo = React.lazy(() => import("../../containers/ToDo/ToDo"));
const ToDoItem = React.lazy(() => import("../../containers/ToDo/ToDoItem"));
const AppRouters = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="post/:id" element={<PostDetails />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/todo/:id" element={<ToDoItem />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouters;
