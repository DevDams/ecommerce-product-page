import React, { useState } from "react"
// Images and icons
import IconCart from "../images/icon-cart.svg"
import Avatar from "../images/image-avatar.png"
import Menu from "../images/icon-menu.svg"
import Close from "../images/icon-close.svg"

const Navbar = ({ product }) => {
  const [ShowCart, setShowCart] = useState(false)
  const [ShowMenu, setShowMenu] = useState(true)

  const showMenu = () => {
    setShowMenu(!ShowMenu)
  }

  return (
    <>
      <div className="w-full h-20 md:h-24">
        <div className="px-5 md:px-0 md:w-4/5 mx-auto h-full flex items-center justify-between border-b border-gray-200">
          <div className="logo-items h-full flex items-center">
            <div className="logo flex items-center">
              <div className="w-8 h-1 relative -mt-3 block lg:hidden" onClick={showMenu}>
                <img
                  src={Menu}
                  alt="menu-icon"
                  className="cursor-pointer w-5 md:w-7"
                />
              </div>
              <h1 className="text-3xl md:text-4xl pl-3 lg:pl-0 font-bold lowercase">Sneakers</h1>
            </div>
            <div className="items text-lg mt-2 h-full text-gray-500 font-normal flex items-center hidden lg:block">
              <ul className="inline-block ml-10 h-full flex items-center">
                <li className="inline-block cursor-pointer px-1 pt-2 mx-2 -mt-2 h-full flex items-center hover:text-black border-b-4 border-transparent hover:border-b-4 hover:border-my-orange">
                  Collections
                </li>
                <li className="inline-block cursor-pointer px-1 pt-2 mx-2 -mt-2 h-full flex items-center hover:text-black border-b-4 border-transparent hover:border-b-4 hover:border-my-orange">
                  Men
                </li>
                <li className="inline-block cursor-pointer px-1 pt-2 mx-2 -mt-2 h-full flex items-center hover:text-black border-b-4 border-transparent hover:border-b-4 hover:border-my-orange">
                  Women
                </li>
                <li className="inline-block cursor-pointer px-1 pt-2 mx-2 -mt-2 h-full flex items-center hover:text-black border-b-4 border-transparent hover:border-b-4 hover:border-my-orange">
                  About
                </li>
                <li className="inline-block cursor-pointer px-1 pt-2 mx-2 -mt-2 h-full flex items-center hover:text-black border-b-4 border-transparent hover:border-b-4 hover:border-my-orange">
                  Contact
                </li>
              </ul>
            </div>
          </div>
          
          <div className="user-card relative flex items-center">
            <div
              className="badge relative mr-5 md:mr-10"
              onClick={() => setShowCart(!ShowCart)}
            >
              <img
                src={IconCart}
                alt="shopping-icon"
                className="cursor-pointer w-5 md:w-7"
              />
              {product.quantity ? (
                <span className="absolute -top-3 -right-3 px-2 md:px-3 text-[12px] rounded-full bg-my-orange text-white">
                  {product.quantity}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="avatar">
              <img
                src={Avatar}
                alt="avatar"
                className="w-9 md:w-11 border-2 border-transparent hover:border-2 hover:border-my-orange rounded-full cursor-pointer"
              />
            </div>
            {ShowCart ? (
              <div className="card-pay z-50 w-[90vw] md:w-80 shadow-lg rounded-xl absolute top-16 pb-7 right-0 md:-right-10 bg-white">
                <div className="card-header border-b-2 border-gray-300 px-4 h-14 flex items-center">
                  <h1 className="text-lg font-bold">Cart</h1>
                </div>
                {product.quantity ? (
                  <div>
                    <div className="product-info px-4 py-5 flex items-center">
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="w-12 border-2 border-black rounded-md"
                      />
                      <div className="text-dark-gray-blue pl-4">
                        <p className="text-md">Fall Limited Edition Sneakers</p>
                        <p>
                          ${product.price} x {product.quantity}{" "}
                          <span className="font-bold text-dark-blue pl-1">
                            ${product.quantity * product.price}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="px-4">
                      <button className="w-full py-3 bg-my-orange text-white rounded-lg font-medium">
                        Checkout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center pt-7 font-bold text-dark-gray-blue">
                    Your cart is empty
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* Navbar on mobile */}
      <div className={`absolute top-0 z-50 w-3/4 h-[100vh] bg-white px-6 ${ShowMenu ? 'active' : ''}`}>
        <div className="h-20 flex items-center">
          <img
            src={Close}
            alt="menu-icon"
            className="cursor-pointer w-5 md:w-7"
            onClick={showMenu}
          />
        </div>
        <ul className="inline-block h-full mt-6">
          <li className="cursor-pointer px-1 pt-2 mt-2 flex items-center font-bold text-lg">
            Collections
          </li>
          <li className="cursor-pointer px-1 pt-2 mt-2 flex items-center font-bold text-lg">
            Men
          </li>
          <li className="cursor-pointer px-1 pt-2 mt-2 flex items-center font-bold text-lg">
            Women
          </li>
          <li className="cursor-pointer px-1 pt-2 mt-2 flex items-center font-bold text-lg">
            About
          </li>
          <li className="cursor-pointer px-1 pt-2 mt-2 flex items-center font-bold text-lg">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
