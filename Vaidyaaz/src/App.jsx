import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Product from "./Pages/Product";
import PageWrapper from "./Components/PageWrapper"; // We’ll create this
import ScrollToTop from "./Components/ScrollToTop";
import BlogDetails from "./Pages/BlogDetails";

function App() {
  const location = useLocation();

  return (
    <>
       <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><Product /></PageWrapper>} />
          <Route path="/blog/:id" element={<PageWrapper><BlogDetails  /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
