import React from 'react'
import SpecialOffer from '../Components/SpecialOffer'
import OrderNow from '../Components/OrderNow'
import WhySmoothie from '../Components/WhySmoothie'
import heroSmoothie from '../assets/assests/heroSmoothie.png'
import ClassicSmoothie from '../Components/ClassicSmoothie'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../Components/Loader'

const Home = () => {

    return (
        <main>
            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Experience Pure Refreshment with Our Premium Smoothies</h1>
                            <p className="text-lg text-gray-600 mb-8">Discover our handcrafted smoothies made with fresh fruits and premium ingredients. Each sip is a burst of natural goodness.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link to={"/cart"} className="bg-[#98D8AA] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Order Now</Link>
                                <Link to={"/menu"} className="border border-[#F7D060] text-[#98D8AA] !rounded-button px-8 py-3 font-medium hover:bg-[#F7D060] hover:text-white transform hover:scale-105 transition-transform duration-300 shadow-lg">View Menu</Link>
                            </div>
                        </div>
                        <div className="relative">
                            <img src={heroSmoothie} alt="Hero Smoothie" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-[#F7D060] bg-opacity-10">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Signature Smoothies</h2>
                    <ClassicSmoothie />
                    <div className='flex items-center justify-center mt-4'>
                        <Link to={"/menu"} className="bg-[#98D8AA] text-white  px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">View Menu</Link>
                    </div>

                </div>
            </section>
            {/* why choose */}
            <WhySmoothie />
            {/* Special OFfer */}
            <SpecialOffer />
            {/* customer review */}
            {/* order now */}
            <OrderNow />
        </main>


    )
}

export default Home