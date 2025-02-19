import React from 'react'
import OrderNow from '../Components/OrderNow'

import acai from '../assets/assests/acai.png'
import matchamagic from '../assets/assests/matchamagic.png'
import goldenglow from '../assets/assests/goldenglow.png'
import specialoffer from '../assets/assests/specialoffer.png'
import heroSmoothie from '../assets/assests/heroSmoothie.png'
import ClassicSmoothie from '../Components/ClassicSmoothie'
const Menu = () => {
    return (
        <>
            <section id="menu-section" class="pt-24 pb-16 bg-white">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Our Complete Menu</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Classic Smoothies</h3>
                            <ul class="space-y-4">
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Tropical Paradise<br /><small class="text-gray-500">Mango, Pineapple, Passion Fruit</small>
                                    </span>
                                    <span class="text-custom font-medium">$6.99</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Berry Blast<br /><small class="text-gray-500">Strawberry, Blueberry, Raspberry</small></span>
                                    <span class="text-custom font-medium">$7.49</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Green Goddess<br /><small class="text-gray-500">Spinach, Kale, Green Apple</small></span>
                                    <span class="text-custom font-medium">$7.99</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Protein Power<br /><small class="text-gray-500">Banana, Peanut Butter, Chocolate</small></span>
                                    <span class="text-custom font-medium">$8.49</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Premium Smoothies</h3>
                            <ul class="space-y-4">
                                <li class="flex justify-between items-center"><span class="text-gray-700">Acai Supreme<br /><small class="text-gray-500">Acai, Banana, Granola, Fresh Berries</small></span>
                                    <span class="text-custom font-medium">$9.99</span>
                                </li>
                                <li class="flex justify-between items-center"><span class="text-gray-700">Matcha Magic<br /><small class="text-gray-500">Matcha Green Tea, Almond Milk, Honey</small></span>
                                    <span class="text-custom font-medium">$8.99</span></li>
                                <li class="flex justify-between items-center"><span class="text-gray-700">Golden Glow<br /><small class="text-gray-500">Turmeric, Ginger, Orange, Coconut</small></span>
                                    <span class="text-custom font-medium">$8.49</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg shadow-lg p-6">
                            <h3 class="text-xl font-bold text-gray-900 mb-4">Add-ons &amp; Boosters</h3>
                            <ul class="space-y-4">
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Protein Boost<br /><small class="text-gray-500">Add extra protein to your smoothie</small></span>
                                    <span class="text-custom font-medium">+$1.50</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Chia Seeds<br /><small class="text-gray-500">Rich in omega-3 and fiber</small></span>
                                    <span class="text-custom font-medium">+$1.00</span>
                                </li>
                                <li class="flex justify-between items-center">
                                    <span class="text-gray-700">Spinach Boost<br /><small class="text-gray-500">Extra greens for nutrition</small></span>
                                    <span class="text-custom font-medium">+$1.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-12 text-center">
                        <button class="bg-[#98D8AA] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90  transform hover:scale-105 transition-transform duration-300 shadow-lg">Order Now</button>
                    </div>
                </div>
            </section>

            <section class="pt-24 pb-16 relative overflow-hidden">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
                        <div class="text-center lg:text-left">
                            <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Fresh &amp; Healthy Menu</h1>
                            <p class="text-lg text-gray-600 mb-8">Explore our wide selection of nutritious and delicious smoothies, made with the finest ingredients</p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button class="bg-[#98D8AA] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Order Now</button>
                                <button class="border border-[#F7D060] text-[#98D8AA] !rounded-button px-8 py-3 font-medium hover:bg-[#F7D060] hover:text-white transform hover:scale-105 transition-transform duration-300 shadow-lg">View Menu</button>
                            </div>
                        </div>
                        <div class="relative">
                            <img src={heroSmoothie} alt="Hero Smoothie" class="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Classic Smoothies</h2>
                    <div class="glide">
                        <div class="glide__track " data-glide-el="track">
                        
                              {/* classic smoothie */}
                            <ClassicSmoothie/>
                                
                        </div>
                    
                    </div>
                </div>
            </section>

            <section class="py-16 bg-[#F7D060] bg-opacity-10">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Premium Smoothies</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={acai} alt="Acai Supreme" class="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Acai Supreme</h3>
                            <p class="text-gray-600 mb-4">Acai, Banana, Granola, Fresh Berries</p>
                            <span class="text-custom font-medium">$9.99</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>

                        <div class="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={matchamagic} alt="Matcha Magic" class="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Matcha Magic</h3>
                            <p class="text-gray-600 mb-4">Matcha Green Tea, Almond Milk, Honey</p>
                            <span class="text-custom font-medium">$8.99</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>
                        <div class="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                            <img src={goldenglow} alt="Golden Glow" class="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Golden Glow</h3>
                            <p class="text-gray-600 mb-4">Turmeric, Ginger, Orange, Coconut</p>
                            <span class="text-custom font-medium">$8.49</span>
                            <button className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-gray-50">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="bg-[#98D8AA] bg-opacity-20 rounded-2xl p-8 md:p-12 shadow-xl">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 class="text-3xl font-bold text-gray-900 mb-6">Seasonal Specials</h2>
                                <p class="text-lg text-gray-600 mb-8">Try our limited-time seasonal creations made with the freshest ingredients of the season.</p>
                                <button class="bg-[#F7D060] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Claim Offer</button>
                            </div>
                            <div class="relative">
                                <img src={specialoffer} alt="Special Offer" class="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 bg-white">
                <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Add-ons &amp; Boosters</h2>
                    <div class="flex  items-center justify-center">
                        <div class="bg-white rounded-lg p-8">
                            <div class="text-center">
                                <i class="fas fa-plus-circle text-custom text-green-300 text-3xl mb-3"></i>
                                <h3 class="text-lg font-semibold mb-2">Protein Boost</h3>
                                <p class="text-gray-600 mb-2">Add extra protein to your smoothie</p>
                                <span class="text-custom font-medium">+$1.50</span>
                                </div>
                            </div>
                        <div class="bg-white rounded-lg p-8">
                            <div class="text-center">
                                <i class="fas fa-seedling text-custom text-3xl mb-3 text-green-300"></i>
                                <h3 class="text-lg font-semibold mb-2">Chia Seeds</h3>
                                <p class="text-gray-600 mb-2">Rich in omega-3 and fiber</p>
                                <span class="text-custom font-medium">+$1.00</span>
                                </div>
                                </div>
                        <div class="bg-white rounded-lg p-8">
                            <div class="text-center">
                                <i class="fas fa-leaf text-custom text-3xl mb-3 text-green-300"></i>
                                <h3 class="text-lg font-semibold mb-2">Spinach Boost</h3>
                                <p class="text-gray-600 mb-2">Extra greens for nutrition</p>
                                <span class="text-custom font-medium">+$1.00</span>
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