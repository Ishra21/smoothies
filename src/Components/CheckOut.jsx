import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const CheckOut = () => {

    const { menu } = useSelector(state => state.menu)
    const [price, setPrice] = useState(0)
    const[popUp, setPopUp] = useState(false)


    const subtotal = () => {
        const sub = menu.reduce((p, c) => p + c.price * c.quantity, 0);
    
        // Ensure `selectedAddOns` exists and sum up amounts correctly
        const addOnsTotal = menu.reduce((total, item) => {
            return total + (item.selectedAddOns ? item.selectedAddOns.reduce((sum, addOn) => sum + addOn.amount, 0) : 0);
        }, 0);
    
        const tax = sub * 0.08; // 8% Tax
        const total = sub + tax + addOnsTotal + Number(price); // Total with shipping
    
        return { sub, tax, addOnsTotal, total };
    };
    

    const handleShipping = (e) => {
        setPrice(e.target.value)
    }

    const handleConfirm = () =>{
        if(menu.length > 0){
 setPopUp(true)
        }else {
            toast.error("Your Cart is Empty")
        }
    }

    const closePopUp = () =>{
        setPopUp(false)
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
                    <select value={price} onChange={handleShipping} className="form-select p-1 border-gray-300 ">
                        <option value={0}>Up to 5 km  Free</option>
                        <option value={15}>5-8 km  (₹ 15)</option>
                        <option value={25}>9-15 km (₹ 25)</option>
                        <option value={40}>Above 15 km (₹ 40)</option>
                    </select>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Add ons</span>
                    <span className="font-semibold">₹{subtotal().addOnsTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">₹{subtotal().sub.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">₹{price}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">₹{subtotal().tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-4 border-t">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">₹{subtotal().total.toFixed(2)}</span>
                </div>
            </div>
            <button onClick={handleConfirm} className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300">Confirm Order</button>
   

            {/* {/ Popup for order confirmation /} */}
  {popUp && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">Order Confirmed!</h2>
        <p className="mt-2">Thank you for your order. We will process it shortly.</p>
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-black"
          onClick={closePopUp}
        >
          OKAY
        </button>
      </div>
    </div>
  )}
   
        </div>


    )
}

export default CheckOut;