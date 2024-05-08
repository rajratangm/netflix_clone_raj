import React from 'react'
import { Header } from './Header'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {use}
export const Browse = () => {

  const user = useSelector(store=> store.app.user)
  const navigate = useNavigate()
  if(!user){
    navigate('/login')
  }
  return (
    <div><Header/>
    <div>
        Browse</div></div>
  )
}
