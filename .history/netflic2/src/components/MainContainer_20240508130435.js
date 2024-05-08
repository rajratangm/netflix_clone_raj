import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'

export const MainContainer = () => {

  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
}
