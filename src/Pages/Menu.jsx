import React, { useEffect } from 'react'
import OrderNow from '../Components/OrderNow'

import acai from '../assets/assests/acai.png'
import matchamagic from '../assets/assests/matchamagic.png'
import goldenglow from '../assets/assests/goldenglow.png'
import specialoffer from '../assets/assests/specialoffer.png'
import heroSmoothie from '../assets/assests/heroSmoothie.png'
import ClassicSmoothie from '../Components/ClassicSmoothie'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/Cart/CartSlice'
import Loader from '../Components/Loader'
import { Link } from 'react-router-dom'
const Menu = () => {

    const dispatch = useDispatch()

    const {All_Carts} = useSelector((state) => state.Cart)

    // console.log(All_Carts)


    const{isLoading} = useSelector(state=> state.Cart)


    if(isLoading){
        <Loader/>
    }

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch]);


    return (
        <>
            <section id="menu-section" className="pt-24 pb-16 bg-white">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Complete Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Classic Smoothies</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Tropical Paradise<br /><small className="text-gray-500">Mango, Pineapple, Passion Fruit</small>
                                    </span>
                                    <span className="text-custom font-medium">$6.99</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Berry Blast<br /><small className="text-gray-500">Strawberry, Blueberry, Raspberry</small></span>
                                    <span className="text-custom font-medium">$7.49</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Green Goddess<br /><small className="text-gray-500">Spinach, Kale, Green Apple</small></span>
                                    <span className="text-custom font-medium">$7.99</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Protein Power<br /><small className="text-gray-500">Banana, Peanut Butter, Chocolate</small></span>
                                    <span className="text-custom font-medium">$8.49</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Smoothies</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center"><span className="text-gray-700">Acai Supreme<br /><small className="text-gray-500">Acai, Banana, Granola, Fresh Berries</small></span>
                                    <span className="text-custom font-medium">$9.99</span>
                                </li>
                                <li className="flex justify-between items-center"><span className="text-gray-700">Matcha Magic<br /><small className="text-gray-500">Matcha Green Tea, Almond Milk, Honey</small></span>
                                    <span className="text-custom font-medium">$8.99</span></li>
                                <li className="flex justify-between items-center"><span className="text-gray-700">Golden Glow<br /><small className="text-gray-500">Turmeric, Ginger, Orange, Coconut</small></span>
                                    <span className="text-custom font-medium">$8.49</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Add-ons &amp; Boosters</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Protein Boost<br /><small className="text-gray-500">Add extra protein to your smoothie</small></span>
                                    <span className="text-custom font-medium">+$1.50</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Chia Seeds<br /><small className="text-gray-500">Rich in omega-3 and fiber</small></span>
                                    <span className="text-custom font-medium">+$1.00</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="text-gray-700">Spinach Boost<br /><small className="text-gray-500">Extra greens for nutrition</small></span>
                                    <span className="text-custom font-medium">+$1.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <Link to={"/cart"} className="bg-[#98D8AA] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90  transform hover:scale-105 transition-transform duration-300 shadow-lg">Order Now</Link>
                    </div>
                </div>
            </section>

            <section className="pt-24 pb-16 relative overflow-hidden">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Fresh &amp; Healthy Menu</h1>
                            <p className="text-lg text-gray-600">Explore our wide selection of nutritious and delicious smoothies, made with the finest ingredients</p>
                        </div>
                        <div className="relative">
                            <img src={heroSmoothie} alt="Hero Smoothie" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-[#F7D060]">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 ">Classic Smoothies</h2>
                    <div className="glide">
                        <div className="glide__track " data-glide-el="track">
                        
                              {/* classic smoothie */}
                            <ClassicSmoothie/>
                                
                        </div>
                    
                    </div>
                </div>
            </section>

            {/* <section className="py-16 bg-[#F7D060] bg-opacity-10">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Premium Smoothies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={acai} alt="Acai Supreme" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Acai Supreme</h3>
                            <p className="text-gray-600 mb-4">Acai, Banana, Granola, Fresh Berries</p>
                            <span className="text-custom font-medium">$9.99</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>

                        <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={matchamagic} alt="Matcha Magic" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Matcha Magic</h3>
                            <p className="text-gray-600 mb-4">Matcha Green Tea, Almond Milk, Honey</p>
                            <span className="text-custom font-medium">$8.99</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>
                        <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={goldenglow} alt="Golden Glow" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Golden Glow</h3>
                            <p className="text-gray-600 mb-4">Turmeric, Ginger, Orange, Coconut</p>
                            <span className="text-custom font-medium">$8.49</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-16 bg-gray-50">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#98D8AA] bg-opacity-20 rounded-2xl p-8 md:p-12 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Specials</h2>
                                <p className="text-lg text-gray-600 mb-8">Try our limited-time seasonal creations made with the freshest ingredients of the season.</p>
                                <button className="bg-[#F7D060] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Claim Offer</button>
                            </div>
                            <div className="relative">
                                <img src={specialoffer} alt="Special Offer" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Add-ons &amp; Boosters</h2>
                    <div className="flex  items-center justify-center">
                        <div className="bg-white rounded-lg p-8">
                            <div className="text-center">
                                <i className="fas fa-plus-circle text-custom text-green-300 text-3xl mb-3"></i>
                                <h3 className="text-lg font-semibold mb-2">Protein Boost</h3>
                                <p className="text-gray-600 mb-2">Add extra protein to your smoothie</p>
                                <span className="text-custom font-medium">+$1.50</span>
                                </div>
                            </div>
                        <div className="bg-white rounded-lg p-8">
                            <div className="text-center">
                                <i className="fas fa-seedling text-custom text-3xl mb-3 text-green-300"></i>
                                <h3 className="text-lg font-semibold mb-2">Chia Seeds</h3>
                                <p className="text-gray-600 mb-2">Rich in omega-3 and fiber</p>
                                <span className="text-custom font-medium">+$1.00</span>
                                </div>
                                </div>
                        <div className="bg-white rounded-lg p-8">
                            <div className="text-center">
                                <i className="fas fa-leaf text-custom text-3xl mb-3 text-green-300"></i>
                                <h3 className="text-lg font-semibold mb-2">Spinach Boost</h3>
                                <p className="text-gray-600 mb-2">Extra greens for nutrition</p>
                                <span className="text-custom font-medium">+$1.00</span>
                                </div>
                            </div>
                    </div>
                </div>
            </section>

            <OrderNow />

        </>
    )
}

export default Menu