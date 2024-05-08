import React, { useEffect } from 'react'
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { MainContainer } from './MainContainer'
import { MovieContainer } from './MovieContainer'
import axios from 'axios'
import { Now_Playing_Movie, options } from '../utils/constants'
// import { useNavigate } from 'react-router-dom'
export const Browse = () => {

  const user = useSelector(store=> store.app.user)
  const navigate = useNavigate()
  const nowPlayingMovies = async()=>{
    try{
      const res = await axios.get(Now_Playing_Movie, options)
      console.log(res)

    }
    catch(error){

    }
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
