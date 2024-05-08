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
import { useDispatch, useSelector } from 'react-redux';
import { API_END_POINT } from '../utils/constants';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'

export const Header = () => {
  const p = useSelector(store => store.app.user); // Get user from Redux store
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler= async ()=>{
    try{
      const res =await axios.get(`${API_END_POINT}/logout`)
      if(res.data.success){
        toast.success(res.data.message)
      }
      dispatch(setUser(null))
      navigate('/')
    }
    catch(error){
      console.log(error)
    }

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
