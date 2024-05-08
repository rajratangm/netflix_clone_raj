import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = (props) => {
    const title = props.title;

  return (
    <div className='px-8'>
        <h1 className='text-white text-3xl'> Popular Movies</h1>
        <div >
            <div className='flex items-center '>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    </div>
  )
}
