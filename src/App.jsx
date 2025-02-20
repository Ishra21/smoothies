import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CardItems from './Pages/CardItems'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CardItems/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App