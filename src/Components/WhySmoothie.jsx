import React from 'react'

const WhySmoothie = () => {
return (
    <section className="py-16 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Smoothies?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <i className="fas fa-leaf text-custom text-4xl mb-4 text-green-300"></i>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">100% Natural</h3>
                        <p className="text-gray-600">Made with fresh fruits and vegetables, no artificial additives or preservatives.</p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <i className="fas fa-heart text-custom text-4xl mb-4 text-green-300"></i>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthy Choice</h3>
                        <p className="text-gray-600">Packed with vitamins, minerals, and antioxidants for your wellbeing.</p>
                    </div>
                    <div className="bg-white rounded-lg p-8 text-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <i className="fas fa-blender text-custom text-4xl mb-4 text-green-300"></i>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Fresh Daily</h3>
                        <p className="text-gray-600">Prepared fresh to order with premium quality ingredients.</p>
                    </div>
                </div>
            </div>
        </section>  
)
}

export default WhySmoothie