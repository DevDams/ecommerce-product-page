import React, { useState } from "react"
// images
import ProductOne from "../images/image-product-1.jpg"
import ProductTwo from "../images/image-product-2.jpg"
import ProductThree from "../images/image-product-3.jpg"
import ProductFour from "../images/image-product-4.jpg"
import ProductOneThumb from "../images/image-product-1-thumbnail.jpg"
import ProductTwoThumb from "../images/image-product-2-thumbnail.jpg"
import ProductThreeThumb from "../images/image-product-3-thumbnail.jpg"
import ProductFourThumb from "../images/image-product-4-thumbnail.jpg"
import Next from "../images/icon-next.svg"
import Previous from "../images/icon-previous.svg"

const ImagePreview = () => {

  const one = ProductOne
  const two = ProductTwo
  const three = ProductThree
  const four = ProductFour

  const [PreviewImg, setPreviewImg] = useState(one)
  let [NextImg, setNextImg] = useState(0)

  const images = [one, two, three, four]

  const next = () => {
    if (NextImg === images.length - 1) {
      console.log('next limit', NextImg)
      setPreviewImg(images[NextImg])
    } else {
      setNextImg((NextImg) => NextImg + 1)
      setTimeout(() => {
        setPreviewImg(images[NextImg])
        console.log('next', NextImg)
      }, 100);
    }
  }

  const back = () => {
    if (NextImg === images.length - 1 && NextImg > 0) {
      setNextImg((NextImg) => NextImg - 1)
      setPreviewImg(images[NextImg])
      console.log('back', NextImg)
    } else if (NextImg !== images.length - 1 && NextImg > 0) {
      setNextImg((NextImg) => NextImg - 1)
      setPreviewImg(images[NextImg])
      console.log('back limit', NextImg)
    } else {
      setPreviewImg(images[NextImg])
    }
  }

  return (
    <>
      <div className="w-full relative lg:w-1/2">
        <div className="block md:hidden flex items-center justify-between px-5 w-full h-full absolute top-0 left-0">
          <button className="bg-white w-11 h-11 rounded-full flex items-center justify-center" onClick={back}>
            <img src={Previous} alt="arrow-icon" />
          </button>
          <button className="bg-white w-11 h-11 rounded-full flex items-center justify-center" onClick={next}>
            <img src={Next} alt="arrow-icon" />
          </button>
        </div>
        <img src={PreviewImg} alt="product" className="md:rounded-xl w-full md:w-4/5 lg:w-2/3 mx-auto" />
        <div className="image-grid w-2/3 mx-auto mt-5 flex items-center justify-between hidden md:flex">
          <img src={ProductOneThumb} alt="product-1-thumbnail" className="w-1/4 rounded-xl border-2 border-transparent hover:border-2 hover:border-my-orange hover:opacity-6 cursor-pointer" onClick={() => setPreviewImg(one)} />
          <img src={ProductTwoThumb} alt="product-2-thumbnail" className="w-1/4 rounded-xl border-2 border-transparent hover:border-2 hover:border-my-orange hover:opacity-6 cursor-pointer" onClick={() => setPreviewImg(two)} />
          <img src={ProductThreeThumb} alt="product-3-thumbnail" className="w-1/4 rounded-xl border-2 border-transparent hover:border-2 hover:border-my-orange hover:opacity-6 cursor-pointer" onClick={() => setPreviewImg(three)} />
          <img src={ProductFourThumb} alt="product-4-thumbnail" className="w-1/4 rounded-xl border-2 border-transparent hover:border-2 hover:border-my-orange hover:opacity-6 cursor-pointer" onClick={() => setPreviewImg(four)} />
        </div>
      </div>
    </>
  )
}

export default ImagePreview
