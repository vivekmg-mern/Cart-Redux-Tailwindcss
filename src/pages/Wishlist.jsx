import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import {removeItem} from '../redux/slices/wishlistSlice'
import {addToCart} from '../redux/slices/cartSlice'

const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
const handleCart = (product)=>{
  dispatch(removeItem(product.id))
  dispatch(addToCart(product))
  const existingProduct = userCart?.find(item=>item?.id==product.id)
  if(existingProduct){
    alert("Product quantity incremented!!")
  }else{
    alert("Product added to cart")
  }
}


  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-5' >
{
  userWishlist?.length>0?
  <>
<h1 className='text-red-600 text-4xl font-bold' >My Wishlist</h1>
<div className='grid grid-cols-4 gap-4'>
      {
        userWishlist?.map(product=>(
        <div className='rounded border p-2 shadow'>
        <img height={'200px'} width={'100%'} src={product?.thumbnail} alt="" />
        <div className='text-center'>
          <h3 className='text-xl font-bold'>{product?.title}</h3>
        <div className='flex justify-evenly mt-3' >
          <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
          <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-700'></i></button>
        </div>
        </div>
        </div>
        ))
      }
    </div>
</>
:
<div className='flex flex-col justify-center items-center'>
  <img className='w-100 h-1/2' src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="" />
  <h1>Your Wishlist is empty!!</h1>
</div>
}
    </div>

    </>
    
  )
}

export default Wishlist