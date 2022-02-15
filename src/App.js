import React, { useState } from 'react'

// Components
import Navbar from './components/Navbar'
import ImagePreview from './components/ImagePreview'
import ProductDetail from './components/ProductDetail'

const App = () => {
  const [ProductInfo, setProductInfo] = useState({ quantity: 0, price: 0})

  return (
    <div className="App">
      <Navbar product={ProductInfo} />
      <div className='w-full md:w-5/6 lg:w-4/5 flex flex-col md:flex md:flex-row items-center justify-around mx-auto md:mt-16'>
        <ImagePreview />
        <ProductDetail productChoice={setProductInfo} />
      </div>
      <div className="attribution sticky mt-10 bottom-0 text-center h-10 w-full flex items-center justify-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://damsx.netlify.app" target="_blank">Adams Aimé-Désiré</a>.
      </div>
    </div>
  )
}

export default App
