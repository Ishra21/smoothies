import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CardItems from './Pages/CardItems'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CardItems/>} />
      </Routes>
      <Footer />
      <ToastContainer/>
      </HashRouter>
    // </BrowserRouter>
  )
}

export default App