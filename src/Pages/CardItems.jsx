import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleDecrease, handleIncrese, handleRemoveItem } from '../features/menu/menuSlice'
import CheckOut from '../Components/CheckOut'


const CardItems = () => {

  const { menu } = useSelector(state => state.menu)
  // console.log(menu)

  const dispatch = useDispatch()

  useEffect(() => {
    localStorage.setItem("menu", JSON.stringify(menu))
  }, [menu])





  return (
    <main>
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Shopping Cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="w-full max-w-4xl mx-auto">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                {
                  menu.length <= 0 ? (
                    <img  className= "w-84" src='https://files.oaiusercontent.com/file-1j9YXTWiTvq6dZBRNYYPkp?se=2025-02-21T11%3A09%3A15Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0575a22c-b410-4c72-ae59-65056a8f7bd9.webp&sig=Mjl0ZtfYKCKS3dGjUPOxVrZGX0g5pAgZFmrQRU/%2BxCw%3D'></img>

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
                                    <select className="form-select border-1 ">
                                      {item.add_ons.map((add, index) => {
                                        return (
                                          <option key={index}>{add}</option>
                                        )
                                      })}
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
