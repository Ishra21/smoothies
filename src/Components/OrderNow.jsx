import React from 'react'

const OrderNow = () => {
  return (
    <section className="py-16 bg-white">
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Order Now</h2>
        <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom"/>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-custom focus:ring-custom"/>
                </div>
                <div>
                    <label htmlFor="smoothie" className="block text-sm font-medium text-gray-700">Choose Your Smoothie</label>
                    <select id="smoothie" className="mt-1 block w-full p-1 rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom">
                        <option>Tropical Paradise</option>
                        <option>Berry Blast</option>
                        <option>Green Goddess</option>
                        <option>Protein Power</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Special Instructions</label>
                    <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-[#98D8AA] text-white !rounded-button px-8 py-3 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Place Order</button>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default OrderNow