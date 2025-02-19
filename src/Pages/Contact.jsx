import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
  return (
    <>

    <main>
        
    <section className="pt-24 pb-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="w-full max-w-2xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" for="name">Name</label>
                            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" placeholder="Your name"/>
                        </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2" for="email">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" placeholder="your@email.com"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2" for="subject">Subject</label>
                                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" placeholder="Message subject"/>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2" for="message">Message</label>
                                <textarea id="message" rows="6" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent" placeholder="Your message"></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-[#98D8AA] text-white px-8 py-3 rounded-md hover:bg-opacity-90  transform hover:scale-105 transition-transform duration-300 shadow-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-map-marker-alt text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Visit Us</h4>
                            <p className="text-gray-600">123 Smoothie Street<br/>New York, NY 10001</p>
                        </div>
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-phone text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                            <p className="text-gray-600">Phone: (555) 123-4567</p>
                        </div>
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-envelope text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Email Us</h4>
                            <p className="text-gray-600">info@smoothiebar.com<br/>support@smoothiebar.com</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <div className="mt-16">
                        <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Business Hours</h3>
                        <div className="max-w-md mx-auto bg-[#98D8AA] bg-opacity-10 rounded-lg p-6">
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="font-medium">Monday - Friday</span>
                                    <span>8:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Saturday</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">Sunday</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}

export default Contact