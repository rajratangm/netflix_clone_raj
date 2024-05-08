import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import {useSe}

export const MainContainer = () => {
  const movie = useSelector(store => store.movie);
  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
}
