import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home/home";
import EshopPage from "./pages/Eshop/eshop";
import ContactPage from "./pages/Contact/contact";
import CollectionsPage from "./pages/Collections/collections";
import AboutPage from "./pages/About/about";
import ProductItem from "./components/productItem/productItem";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  },[])

  return (
    <>
    {loading ? <div>Loading...</div> : <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<HomePage/>} />
        <Route path="/eshop" element = {<EshopPage/>} />
        <Route path="/eshop/:categoryId/:productId" element={<ProductItem/>}   />
        <Route path="/contact" element = {<ContactPage/>} />
        <Route path="/about" element = {<AboutPage/>} />
        <Route path="/collections" element = {<CollectionsPage/>} />
      </Routes>
    </>}  
    </>
  );
}

export default App;
