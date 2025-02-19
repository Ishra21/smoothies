import React from 'react'
import ourstore from '../assets/assests/ourstore.png'
import founder from '../assets/assests/founder.jpeg'
import headofoperation from '../assets/assests/headofoperation.jpeg'
import emily from  '../assets/assests/emily.png'
const About = () => {
return (
    <>

    <main>
        <section className="pt-24 pb-16 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <img src={ourstore} alt="Our Store" className="w-full h-auto rounded-lg shadow-xl"/>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
                        <p className="text-gray-600 leading-relaxed">Founded in 2020, Smoothie Bar was born from a passion for creating delicious and nutritious beverages that enhance our customers&#39; well-being. We believe in using only the finest, freshest ingredients to craft smoothies that not only taste amazing but also provide essential nutrients for a healthy lifestyle.</p>
                        <p className="text-gray-600 leading-relaxed">Our commitment to quality extends beyond our products to our service and environment. We&#39;ve created a warm, welcoming space where our community can gather, rejuvenate, and enjoy premium smoothies made with care.</p>
                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-custom">1000+</span>
                                <span className="text-gray-600">Happy Customers</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-custom">20+</span>
                                <span className="text-gray-600">Unique Recipes</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-leaf text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
                            <p className="text-gray-600">We source the freshest, highest-quality ingredients for our smoothies.</p>
                        </div>
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-heart text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Health-Focused</h4>
                            <p className="text-gray-600">Every recipe is crafted with your health and wellness in mind.</p>
                        </div>
                        <div className="text-center p-6 bg-[#98D8AA] bg-opacity-10 rounded-lg">
                            <i className="fas fa-recycle text-custom text-3xl mb-4"></i>
                            <h4 className="text-xl font-semibold mb-2">Eco-Friendly</h4>
                            <p className="text-gray-600">We&#39;re committed to sustainable practices and eco-friendly packaging.</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">Meet Our Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img src={founder} alt="Ishra Khan" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                            <h4 className="text-xl font-semibold mb-2">Ishra Khan</h4>
                            <p className="text-gray-600">Founder &amp; CEO</p>
                        </div>
                        <div className="text-center">
                            <img src={ headofoperation} alt="Vanshika Upadhyay" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                            <h4 className="text-xl font-semibold mb-2">Vanshika Upadhyay</h4>
                            <p className="text-gray-600">Head of Operations</p>
                        </div>
                        <div className="text-center">
                            <img src={emily} alt="Emily" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"/>
                            <h4 className="text-xl font-semibold mb-2">Emily Martinez</h4>
                            <p className="text-gray-600">Nutritionist</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    </>
)
}

export default About