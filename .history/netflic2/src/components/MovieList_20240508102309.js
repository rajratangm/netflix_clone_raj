import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = () => {
  return (
    <div>
        <h1> Popular Movies</h1>
        <div>
            <div dis>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>

            </div>
        </div>
    </div>
  )
}
