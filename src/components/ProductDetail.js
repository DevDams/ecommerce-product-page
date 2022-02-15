import React, { useState } from 'react'
// Images and icons
import IconCart from "../images/icon-cart-2.svg";
import IconPlus from "../images/icon-plus.svg";
import IconMinus from "../images/icon-minus.svg";

const ProductDetail = ({productChoice}) => {
  // Variables
  const cost = '125.00'
  const [qty, setQuatity] = useState(0)

  const increment = () => {
    setQuatity(qty + 1)
  }

  const decrement = () => {
    setQuatity(qty - 1)
    if (qty === 0) {
      setQuatity(0)
    }
  }

  const addToCart = () => {
    productChoice({ quantity: qty, price: cost})
  }

  return (
    <>
      <div className='w-full pb-16 md:pb-0 md:w-1/2'>
        <div className='details px-7 md:px-6 pt-6 md:pt-0'>
          <h4 className='text-my-orange uppercase font-bold'>Sneaker Company</h4>
          <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl text-dark-blue font-bold mt-4'>Fall Limited Edition <br/> Sneakers</h1>
          <p className='mt-10 font-normal text-dark-gray-blue w-full md:w-[80%]'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='flex items-center justify-between md:block'>
            <p className='font-bold text-dark-blue mt-5 flex items-center'><span className='text-2xl'>$125.00</span> <span className='bg-pale-orange text-my-orange px-2 text-md ml-3 rounded-md'>50%</span></p>
            <p className='text-gray-blue font-bold line-through mt-5 md:mt-2'>$250.00</p>
          </div>
        </div>
        <div className='action-btn flex flex-col md:flex-row items-center px-6 h-12 mt-5'>
          <div className='bg-light-gray-blue py-7 md:py-0 w-full md:w-32 h-full flex items-center justify-center md:justify-between rounded-xl'>
            <button className='px-4 cursor-pointer md:h-full w-16 md:w-auto h-12 flex items-center justify-center' onClick={decrement}>
              <img src={IconMinus} alt="shopping-icon" />
            </button>
            <span className='font-bold w-1/3 mx-auto text-center md:w-auto'>{qty}</span>
            <button className='px-4 cursor-pointer md:h-full w-16 md:w-auto h-12 flex items-center justify-center' onClick={increment}>
              <img src={IconPlus} alt="shopping-icon" />
            </button>
          </div>
          <div className='h-full py-3 md:py-0 flex items-center justify-center bg-my-orange text-white font-bold rounded-xl w-full md:w-72 md:ml-4 mt-4 md:mt-0 shadow-xl shadow-my-orange/20 hover:bg-my-orange/70' onClick={addToCart}>
            <img src={IconCart} alt="shopping-icon" />
            <span className='text-md ml-3'>Add to cart</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
