import React, { useEffect } from 'react'
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
export const Browse = () => {

  const user = useSelector(store=> store.app.user)
  const navigate = useNavigate()
  useEffect(()=>{
    
  })
  if(!user){
    navigate('/login')
  }
 
  return (
    <div><Header/>
    <div>
        Browse</div></div>
  )
}
