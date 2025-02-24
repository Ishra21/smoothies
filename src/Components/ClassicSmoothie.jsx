import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../features/Cart/CartSlice'
import { addToCart } from '../features/menu/menuSlice'
import { toast } from 'react-toastify'
import Loader from '../Components/Loader'
const ClassicSmoothie = () => {

    const { All_Carts, isLoading } = useSelector(state => state.Cart)
    // console.log(All_Carts)





    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
        if (item) {
            toast.success(`${item.name} added to cart`, { autoClose: 3000 })
        }
    }

    if (isLoading) {
        return <Loader />
    }
    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {
                All_Carts?.map((item) => {
                    //    console.log(item)
                    return (
                        <div key={item.id} className="bg-white rounded-lg p-6 text-center shadow-xl my-4 ">
                            <img src={item.image} alt="Tropical Paradise" className="w-full h-64 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                            <div className='my-2'>
                                {item.add_ons?.map((add, index) => {
                                    return (
                                        <p className='text-gray-500 ' key={index}>{add.name} (₹{add.amount})</p>
                                    )
                                    // console.log(add)
                                })}
                            </div>
                            <span className="text-custom font-medium">₹{item.price}</span>
                            <button onClick={() => handleAddToCart(item)} className="bg-[#98D8AA] mx-4 text-white !rounded-button px-4 py-1 font-medium hover:bg-opacity-90 transform hover:scale-105 transition-transform duration-300 shadow-lg">Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ClassicSmoothie