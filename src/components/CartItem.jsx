import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import {remove} from "../redux/slices/Slices"
import { toast } from 'react-hot-toast'

const CartItem = ({post,postIndex}) => {
   const dispatch=useDispatch();
  const removeFromCart=()=>{
         dispatch(remove(post.id));
         toast.error("item removed");
  }

  return (
    <div  className='flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5'>
    
        <div className='w-[30%]'><img src={post.image} alt=""/></div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
            <h1 className='text-xl text-slate-700 font-semibold'>{post.title}</h1>
            <h1  className='text-base text-slate-700 font-medium'>{post.description}</h1>
        </div>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-lg text-green-600'>{post.price}</p>
        </div>
        <div className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
            <FcDeleteDatabase onClick={removeFromCart} className='text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'/>
        </div>
      </div>
    
  )
}

export default CartItem
