import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index"
import { ROOT, SEARCH, DETAILUSER } from "../navigation/constants";
import Search from "../pages/Search/indexSearch"
import DetailUser from "../pages/DetailUser";


export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {/* List all public routes here */}
        <Route path={ROOT} element={<Home/>}/>
        <Route path={SEARCH} element={<Search/>} />
        <Route path={DETAILUSER} element={<DetailUser/>} />
      </Routes>
    </div>
  );
};
