import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({title, movies}) => {
    // const title = props.title;
    // const movies = props.movies
  return (
    <div className='px-8'>
        <h1 className='text-white text-3xl py-8'> {title}</h1>
        <div >
            <div className='flex items-center '>
                {

                    movies.map((movie)=>{
                        return(
                            <MovieCard key= {movie.id}/>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}
