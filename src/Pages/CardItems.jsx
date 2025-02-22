import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDecrease, handleIncrese, handleRemoveItem, updateAddOns } from '../features/menu/menuSlice'
import CheckOut from '../Components/CheckOut'

import { Link } from 'react-router-dom'
import { HiArrowSmRight } from "react-icons/hi";

const CardItems = () => {

  const { menu } = useSelector(state => state.menu)
  // console.log(menu)

  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu))
  }, [menu])


  const handleAddOnChange = (e, item) => {
    const selectedAddOn = item.add_ons.find(add => add.name === e.target.value);
    if (selectedAddOn) {
      dispatch(updateAddOns({ id: item.id, addOn: selectedAddOn }));
    }
  };
  


  return (
    <main>
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shopping Cart</h2>
          <div className="">
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {
                  menu.length <= 0 ? (
                    <div className='flex items-center flex-col'>
                      <img className="w-84" src="https://i.pinimg.com/originals/72/41/da/7241da96df385043010a22ab2c54ae3d.gif"></img>
                      <p className='text-3xl text-center my-2 font-bold' >Your Card is Empty</p>
                      <Link to={"/menu"} className=" my-2 flex items-center  text-[#98D8AA] !rounded-button px-8 py-3 font-medium   transform hover:scale-105 transition-transform duration-300 ">View Menu<HiArrowSmRight /></Link>

                    </div>

                  ) : (
                    <div className="p-6 space-y-6">
                      {
                        menu.map((item, index) => {
                          return (
                            <div key={index} className="flex items-center justify-between p-4 border-b">
                              <div className="flex items-center space-x-4">
                                <img src={item.image} alt="Strawberry Smoothie" className="w-24 h-24 object-cover rounded-lg" />
                                <div><h3 className="text-lg font-semibold">{item.name}</h3>

                                  <div className="mt-2">
                                    <span className="text-custom font-semibold">₹{item.price}</span>
                                  </div>
                                  <div className="flex items-center my-2">
                                    <span className="text-gray-600 mr-2">Add-on</span>
                                    <select className="form-select border-1" onChange={(e) => handleAddOnChange(e, item)}>
                                        {item.add_ons.map((add, index) => (
                                        <option key={index} value={add.name}>
                                          {add.name} (₹{add.amount})
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center border rounded-lg">
                                  <button className="px-3 py-1 hover:bg-gray-100" onClick={() => dispatch(handleDecrease(item))}>-</button>
                                  <span className="px-4 py-1">{item.quantity}</span>
                                  <button className="px-3 py-1 hover:bg-gray-100" onClick={() => dispatch(handleIncrese(item))}>+</button>
                                </div>
                                <button onClick={() => dispatch(handleRemoveItem(item))} className="text-red-500 hover:text-red-700">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </div>

                            </div>
                          )
                        })
                      }

                    </div>
                  )
                }
                <CheckOut />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default CardItems
