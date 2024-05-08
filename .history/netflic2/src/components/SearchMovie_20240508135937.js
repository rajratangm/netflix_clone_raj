import React, { useState } from 'react'

export const SearchMovie = () => {
  const [searchMovie, setSearchMovie]= useState('')
  // alert(searchMovie)
  const submitHandler=(e)=>{
    e.preventDefault()
    alert(searchMovie)

  }
  return (
    <div className='flex justify-center pt-[10%] w-[100%'>
      <form onSubmit={submitHandler} className='w-[50%]'>
      <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>

        <input value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)} className='w-full outline-none rounded-md text-lg' type='text' placeholder ='Search Movies...'/>
        <button className='bg-red-800 text-white rounded-md px-4 py-2'>Search</button>

        </div>
    
        

      </form>
    </div>
  )
}
