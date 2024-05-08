import React from 'react'

export const VideoBackground = () => {
  return (
    <div className=''>
        <iframe 
        className='w-screen video-aspect-video'
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/9zOIUpJLVps?si=0rtIoSejisHXU2Uu&autoplay=1&mute=1" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen='true'></iframe>
    </div>
  )
}
