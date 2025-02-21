import React from 'react'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    
  const { menu } = useSelector(state => state.menu)



  const subtotal = () =>{
    const sub = menu.reduce((p,c) => p + c.price * c.quantity, 0)
const tax = sub * 0.08

    return {sub , tax}
}

    return (
        <div className="p-6 bg-gray-50">
            <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Quantity</span>
                    <span className="font-semibold">{menu.length}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">Delivery Distance</span>
                    <select className="form-select rounded-lg border-gray-300 w-32">
                        <option value="2">5-8 km  (₹ 15)</option>
                        <option value="5">9-15 km (₹ 25)</option>
                        <option value="10">Above 15 km (₹ 40)</option>
                    </select>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal().sub.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">₹2.00</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">₹{subtotal().tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">₹23.07</span>
                </div>
            </div>
            <button className="w-full mt-6 bg-custom text-white py-3 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300">Proceed to Checkout</button>
        </div>
    )
}

export default CheckOut;