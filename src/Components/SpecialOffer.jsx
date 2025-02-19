import React from 'react'
import specialofffer from "../assets/assests/specialoffer.png"
const SpecialOffer = () => {
return (

        
        <section className="py-16 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-[#98D8AA] bg-opacity-20 rounded-2xl p-8 md:p-12 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Special Offer</h2>
                            <p className="text-lg text-gray-600 mb-8">Get 20% off on your first order! Use code FRESH20 at checkout.</p>
                            <button className="bg-[#F7D060] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Claim Offer</button>
                        </div>
                        <div className="relative">
                            <img src={specialofffer} alt="Special Offer" className="w-full h-auto object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default SpecialOffer