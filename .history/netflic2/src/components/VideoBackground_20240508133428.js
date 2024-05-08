import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

export const VideoBackground = ({movieId}) => {
  const trailer = useSelector(store => store.movie.trailerMovie)
  useMovieById(movieId)
  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video'
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen='true'></iframe>
    </div>
  )
}
