import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = () => {
  return (
    <div>
        <h1 className='
        '> Popular Movies</h1>
        <div>
            <div className='flex items-center '>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    </div>
  )
}
