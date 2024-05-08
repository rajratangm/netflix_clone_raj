import React, { useEffect } from 'react'
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer'
import { MovieContainer } from './MovieContainer'
// import { useNavigate } from 'react-router-dom'
export const Browse = () => {

  const user = useSelector(store=> store.app.user)
  const navigate = useNavigate()
  const nowPlayingMovies = async()=>{
    try{}
  }
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  },[])
  
 
  return (
    <div><Header/>
    <div>
        <MainContainer/>
        <MovieContainer/>
        
        </div></div>
  )
}
