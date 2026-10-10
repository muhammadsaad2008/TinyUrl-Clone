import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import LogIn from "./Pages/LogIn/LogIn.jsx";
import SignUp from"./Pages/SingUp/SignUp.jsx"
import ContactSales from "./Pages/ContactUs/ContactUs.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact-sales" element={<ContactSales />} />
    </Routes>
  </BrowserRouter>)
