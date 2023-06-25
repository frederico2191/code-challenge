import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index"
import { ROOT, DETAILUSER } from "../navigation/constants";
import DetailUser from "../pages/DetailUser";


export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Home/>}/>
        <Route path={DETAILUSER} element={<DetailUser/>} />
      </Routes>
    </div>
  );
};
