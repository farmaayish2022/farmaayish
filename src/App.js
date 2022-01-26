import React, { useEffect, useState} from "react";
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/Home/home";
import EshopPage from "./pages/Eshop/eshop";
import ContactPage from "./pages/Contact/contact";
import CollectionsPage from "./pages/Collections/collections";
import AboutPage from "./pages/About/about";
import ProductItem from "./components/productItem/productItem";
import CategoryItem from "./components/categoryItem/categoryItem";
import Loader from "./components/loader/loader";

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },1000)
  },[])

  return (
    <>
    {loading ? <Loader/> : <>
      <Navbar/>
      <Routes >
        <Route path="/" element = {<HomePage/>} />
        <Route path="/eshop" element = {<EshopPage/>} />
        <Route path="/eshop/:categoryId/:productId" element={<ProductItem/>} />
        <Route path="/eshop/:categoryId" element={<CategoryItem/>} />
        <Route path="/contact" element = {<ContactPage/>} />
        <Route path="/about" element = {<AboutPage/>} />
        <Route path="/collections" element = {<CollectionsPage/>} />
      </Routes>
    </>}  
    </>
  );
}

export default App;
