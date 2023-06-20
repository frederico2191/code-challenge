import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Index from './pages/DetailUser';
import IndexSearch from './pages/Search/indexSearch';
import Navbar from './pages/Home/components/Navbar'


const layout = ({children}) => {
    const basename = process.env.BASENAME || "";
    return (
        <div className="h-100">
          <BrowserRouter basename={basename}>
              {/* <ScrollToTop> */}
                <Navbar />
                <children/>
                <div className="mx-sm-1 mx-md-2 mx-lg-3 fw-light min-vh-100 mb-5">
                  <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<IndexSearch />} path="/search?q=:searchedText" />
                    <Route element={<Index />} path="/detailUser/:userId" />
                    <Route element={<h1>Not found!</h1>} />
                  </Routes>
                </div>
              {/* </ScrollToTop> */}
          </BrowserRouter>
        </div>
)}

export default layout