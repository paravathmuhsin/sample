import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Fallback from "../../components/Fallback/Fallback";
import Layout from "../Layout/Layout";

const Home = React.lazy(() => import("../../containers/Home/Home"));
const CommentDetails = React.lazy(() => import("../../containers/Home/CommentDetails"));
const Login = React.lazy(() => import("../../containers/Login/Login"));

const AppRouters = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="comments/:id" element={<CommentDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouters;
