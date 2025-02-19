import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
const Footer = () => {
return (
    <>
    <footer className="bg-gray-900 text-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <img className="h-12 md:h-16 w-auto mb-4" src={logo} alt="Smoothie Bar"/>
                    <p className="text-gray-400">Premium smoothies made with fresh ingredients for a healthier lifestyle.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to={'/'} className="text-gray-400 hover:text-white">Home</Link></li>
                        <li><Link to={'/menu'} className="text-gray-400 hover:text-white">Menu</Link></li>
                        <li><Link to={'/about'} className="text-gray-400 hover:text-white">About</Link></li>
                        <li><Link to={'/contact'} className="text-gray-400 hover:text-white">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400"><i className="fas fa-map-marker-alt mr-2"></i>123 Smoothie Street</li>
                        <li className="text-gray-400"><i className="fas fa-phone mr-2"></i>(555) 123-4567</li>
                        <li className="text-gray-400"><i className="fas fa-envelope mr-2"></i>info@smoothiebar.com</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400">© 2024 Smoothie Bar. All rights reserved.</p>
            </div>
        </div>
    </footer>   

    </>
)
}

export default Footer