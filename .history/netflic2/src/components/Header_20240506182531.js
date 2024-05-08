import React from 'react'
import { IoPerson } from "react-icons/io5";
import LOGO from "./logo1.png"; // Import the image file

export const Header = () => {
  const uer= false
  return (
    <div className='absolute z-10 flex  w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
            <img className='w-56 h-14' src={LOGO} alt="netflix-logo" />
            {
              user && (

              )
            }
          
    </div>
  )
}
