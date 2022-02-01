import React,{useState, useEffect, lazy, Suspense} from "react";
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/navbar/navbar";
import PageNotFound from "./pages/404-page/404-page";
import ScreenLoader from "./components/screen-loader/screen-loader";
import ErrorBoundary from "./components/error-boundary/error-boundary";

const HomePage = lazy(() => import('./pages/Home/home'))
const EshopPage = lazy(() => import('./pages/Eshop/eshop'))
const ContactPage = lazy(() => import('./pages/Contact/contact'))
const CollectionsPage = lazy(() => import('./pages/Collections/collections'))
const AboutPage = lazy(() => import('./pages/About/about'))
const ProductItem = lazy(() => import('./components/productItem/productItem'))
const CategoryItem = lazy(() => import('./components/categoryItem/categoryItem'))


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },5000)
  },[])
  return (
    <>
      <ErrorBoundary>
      {loading ? <ScreenLoader/> : 
        <>
          <Navbar/>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes >
                <Route path="/" element = {<HomePage/>} />
                <Route path="/eshop" element = {<EshopPage/>} />
                <Route path="/eshop/:categoryId/:productId" element={<ProductItem/>} />
                <Route path="/eshop/:categoryId" element={<CategoryItem/>} />
                <Route path="/contact" element = {<ContactPage/>} />
                <Route path="/about" element = {<AboutPage/>} />
                <Route path="/collections" element = {<CollectionsPage/>} />
                <Route path="*" element = {<PageNotFound/>} />
            </Routes>
          </Suspense>
      </>
      }
      </ErrorBoundary>
    </>
   
  );
}

export default App;
