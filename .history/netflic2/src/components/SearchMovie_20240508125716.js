import React from 'react'

export const SearchMovie = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%'>
      <form className='w-[50%]'>
      <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>

        <input type='text' placeholder ='Search Movies...'/>
        <button>Search</button>

        </div>
    
        

      </form>
    </div>
  )
}
