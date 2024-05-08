import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = () => {
  return (
    <div>
        <h1 className='text-white'> Popular Movies</h1>
        <div className='-mt-52 relative '>
            <div className='flex items-center '>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    </div>
  )
}
