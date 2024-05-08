// import React from 'react'
// import { IoPerson } from "react-icons/io5";
// import LOGO from "./logo1.png"; // Import the image file
// import {useSelector} from 'react-redux'
// export const Header = () => {
//   let user = null
//   // const user = useSelector((store)=>store.app.user);
//   // const user= false
//   return (
//     <div className='absolute z-10 flex  w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
//             <img className='w-56 h-14' src={LOGO} alt="netflix-logo" />
//             {
//               user && (
//                 <div className='flex items-center'>
//                 <IoPerson size='24px' color='white'/>
//                   <h1 className='text-lg font-medium text-white'>
//                     Rajratan Mern Stack
//                   </h1>
//                   <div className='ml-4'>
//                   <button className='bg-red-800 text-white px-4 py-2'>Logout</button>
//                   <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
//                   </div>
                 
//                 </div>

//               )
//             }
          
//     </div>
//   )
// }

import React from 'react';
import { IoPerson } from "react-icons/io5";
import LOGO from "./logo1.png"; // Import the image file
import { useSelector } from 'react-redux';

export const Header = () => {
  const p = useSelector(store => store.app.user); // Get user from Redux store
  const logoutHandler= ()=>{
    alert('working')

  }
// const user= false
  return (
    <div className='absolute z-10 flex w-[100%] items-center px-6 justify-between bg-gradient-to-b from-black'>
      <img className='w-56 h-14' src={LOGO} alt="netflix-logo" />
      
       {
        p &&
        (
        <div className='flex items-center'>
          <IoPerson size='24px' color='white' />
          <h1 className='text-lg font-medium text-white'>
            rajrantan {/* Assuming user has a name property */}
          </h1>
          <div className='ml-4'>
            <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movie</button>
          </div>
        </div>
        )
        
        }
      
    </div>
  );
};
