import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index"
import { ROOT } from "../navigation/constants";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Home/>}/>
      </Routes>
    </div>
  );
};
