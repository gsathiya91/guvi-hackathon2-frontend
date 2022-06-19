import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from "./components/Homepage/Router";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
import Product from "./components/Movies/Product";
import Theatres from "./components/Movies/Theatre";
import Seating from "./components/Movies/Screen";

export default function Router() {
  return (
    <>
      <div>
       <DashBoard />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />           
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Product />} />
            <Route path="/booking" element={<Theatres />} />
            <Route path="/seatbooking" element={<Seating />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}


