import React, { useState } from 'react'

const CardItems = () => {


  const [count, setCount] = useState(0)
  
  // const handleIncrease = () => {
  //   setCount(count + 1)
  // }
  // const handleDecrease = () => {
  //   setCount(count - 1 )
  // }


  return (
    <main>
      <section class="pt-24 pb-16 bg-white">
        <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Shopping Cart</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div class="w-full max-w-4xl mx-auto">
              <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="p-6 space-y-6">
                  <div class="flex items-center justify-between p-4 border-b">
                    <div class="flex items-center space-x-4">
                      <img src="https://ai-public.creatie.ai/gen_page/smoothie1.jpg" alt="Strawberry Smoothie" class="w-24 h-24 object-cover rounded-lg" />
                      <div><h3 class="text-lg font-semibold">Strawberry Banana Smoothie</h3>
                        <p class="text-gray-500">Large Size</p>
                        <div class="mt-2">
                          <span class="text-custom font-semibold">$6.99</span>
                        </div>
                        <div class="flex items-center my-2">
                      <span class="text-gray-600 mr-2">Add-on</span>
                      <select class="form-select border-1 ">
                        <option value="2">Chia Seeds(₹ 10)</option>
                        <option value="5">Honey (₹ 15)</option>
                        <option value="10">Almond Milk(₹ 20)</option>
                        <option value="10">Protein (₹ 25)</option>
                      </select>
                    </div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="flex items-center border rounded-lg">
                        <button class="px-3 py-1 hover:bg-gray-100" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                        <span class="px-4 py-1">{count}</span>
                        <button class="px-3 py-1 hover:bg-gray-100" onClick={() => setCount(count + 1)}>+</button>
                      </div>
                      <button class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                      </button>
                    </div>
                   
                  </div>
                  {/* <div class="flex items-center justify-between p-4 border-b">
                    <div class="flex items-center space-x-4">
                      <img src="https://ai-public.creatie.ai/gen_page/smoothie2.jpg" alt="Green Smoothie" class="w-24 h-24 object-cover rounded-lg" />
                      <div>
                        <h3 class="text-lg font-semibold">Green Power Smoothie</h3>
                        <p class="text-gray-500">Medium Size</p>
                        <div class="mt-2">
                          <span class="text-custom font-semibold">$5.99</span>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="flex items-center border rounded-lg">
                        <button class="px-3 py-1 hover:bg-gray-100" onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
                        <span class="px-4 py-1">{count}</span>
                        <button class="px-3 py-1 hover:bg-gray-100" onClick={() => setCount(count + 1)}>+</button>
                      </div>
                      <button class="text-red-500 hover:text-red-700"><i class="fas fa-trash"></i></button>
                    </div>
                  </div> */}
                </div>
                <div class="p-6 bg-gray-50">
                  <div class="space-y-4">
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-gray-600">Quantity</span>
                      <span class="font-semibold">3 items</span>
                    </div>
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-gray-600">Delivery Distance</span>
                      <select class="form-select rounded-lg border-gray-300 w-32">
                        <option value="2">5-8 km  (₹ 15)</option>
                        <option value="5">9-15 km (₹ 25)</option>
                        <option value="10">Above 15 km (₹ 40)</option>
                      </select>
                    </div>
                    <div class="flex justify-between mb-2">
                      <span class="text-gray-600">Subtotal</span>
                      <span class="font-semibold">$18.97</span>
                    </div>
                    <div class="flex justify-between mb-2">
                      <span class="text-gray-600">Shipping</span>
                      <span class="font-semibold">$2.00</span>
                    </div>
                    <div class="flex justify-between mb-2">
                      <span class="text-gray-600">Tax</span>
                      <span class="font-semibold">$2.10</span>
                    </div>
                    <div class="flex justify-between pt-4 border-t">
                      <span class="text-lg font-semibold">Total</span>
                      <span class="text-lg font-semibold">$23.07</span>
                    </div>
                  </div>
                  <button class="w-full mt-6 bg-custom text-white py-3 rounded-lg hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

  )
}

export default CardItems
