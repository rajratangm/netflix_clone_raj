import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = () => {
  return (
    <div className='px-8'>
        <h1 className='text-white text-3xl'> Popular Movies</h1>
        <div className='-mt-52 relative z-10'>
            <div className='flex items-center '>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    </div>
  )
}
