import React from 'react'

export const VideoBackground = () => {
  return (
    <div className='w-screen'>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/9zOIUpJLVps?si=0rtIoSejisHXU2Uu" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>
    </div>
  )
}
