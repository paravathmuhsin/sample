import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Fallback from "../../components/Fallback/Fallback";
import Users from "../../containers/Users/Users";
import Layout from "../Layout/Layout";

const Home = React.lazy(() => import("../../containers/Home/Home"));
const users = React.lazy(() => import("../../containers/Users/Users"));
const PostDetails = React.lazy(() =>
  import("../../containers/Home/PostDetails")
);
const Login = React.lazy(() => import("../../containers/Login/Login"));

const AppRouters = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="post/:id" element={<PostDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouters;
