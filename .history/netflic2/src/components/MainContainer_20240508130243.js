import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'

export const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  if(!movie)
  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
}
