import React from 'react'

const CustomerReview = () => {
  return (
    <section className="py-16 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Customers Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-8">
                        <div className="flex items-center mb-4">
                            <div className="text-custom">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">&#34;The best smoothies I&#39;ve ever had! Fresh ingredients and amazing flavors. Highly recommended!&#34;</p>
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                                <p className="text-sm text-gray-500">Regular Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-8">
                        <div className="flex items-center mb-4">
                            <div className="text-custom">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">&#34;Perfect post-workout treat! The Protein Power smoothie is my go-to after every gym session.&#34;</p>
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Mike Thompson</p>
                                <p className="text-sm text-gray-500">Fitness Enthusiast</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-8">
                        <div className="flex items-center mb-4">
                            <div className="text-custom">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-6">&#34;Love the variety and quality of ingredients. The Green Goddess is my favorite healthy start to the day!&#34;</p>
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-sm font-medium text-gray-900">Emily Chen</p>
                                <p className="text-sm text-gray-500">Health Conscious</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CustomerReview