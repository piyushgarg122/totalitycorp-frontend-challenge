import React from "react";


import {Route, Routes} from "react-router-dom"


import Nav from "./components/Nav";
import Home from "./Home";
import Product from "./Product";
import Cartproductlist from "./Cartproductlist";

const App = () => {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/cart" element={<Cartproductlist/>}></Route>
    </Routes>
    </>
    
    // </div>
  )
};

export default App;
