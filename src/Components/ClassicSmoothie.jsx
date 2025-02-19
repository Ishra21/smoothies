import React from 'react'
import tropicalParadise from '../assets/assests/TropicalParadise.png'
import berryBlast from '../assets/assests/berryBlast.png'
import greengodess from '../assets/assests/greengodess.png'
import proteinPower from '../assets/assests/proteinPower.png'
const ClassicSmoothie = () => {

    return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="bg-white rounded-lg p-6 text-center shadow-xl my-4 ">
                                        <img src={tropicalParadise} alt="Tropical Paradise" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Tropical Paradise</h3>
                                        <p className="text-gray-600 mb-4">Mango, Pineapple, Passion Fruit</p>
                                        <span className="text-custom font-medium">$6.99</span>
                                        <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 text-center shadow-xl my-4">
                                        <img src={berryBlast} alt="Berry Blast" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Berry Blast</h3>
                                        <p className="text-gray-600 mb-4">Strawberry, Blueberry, Raspberry</p>
                                        <span className="text-custom font-medium">$7.49</span>
                                        <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 text-center shadow-xl my-4">
                                        <img src={greengodess} alt="Green Goddess" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Green Goddess</h3>
                                        <p className="text-gray-600 mb-4">Spinach, Kale, Green Apple</p>
                                        <span className="text-custom font-medium">$7.99</span>
                                        <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                                    </div>
                                    <div className="bg-white rounded-lg p-6 text-center shadow-xl my-4">
                                        <img src={proteinPower} alt="Protein Power" className="w-full h-64 object-cover rounded-lg mb-4" />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Protein Power</h3>
                                        <p className="text-gray-600 mb-4">Banana, Peanut Butter, Chocolate</p>
                                        <span className="text-custom font-medium">$8.49</span>
                                        <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                                    </div>
                                </div>
  )
}

export default ClassicSmoothie