import React from 'react'
import { MovieList } from './MovieList'
import { useSelector } from 'react-redux'

export const MovieContainer = () => {
  const movie = useSelector(store=> store.movie)
  console.log(movie)
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-10'>
      <MovieList title={'Popular Movie'} movies= {movie.popularMovie}/>
      <MovieList title={'Now Playing'} movies= {movie.NowPlayingMovies}/>

      <MovieList title={'Popvie'} movies= {movie.popularMovie}/>

      <MovieList title={'Popular Movie'} movies= {movie.popularMovie}/>

      </div>
        
    </div>
  )
}
