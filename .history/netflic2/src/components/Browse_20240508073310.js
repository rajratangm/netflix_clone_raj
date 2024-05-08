import React from 'react'
import { Header } from './Header'
import { useSelector } from 'react-redux'
export const Browse = () => {

  const user = useSelector(store=> store.app.user)
  
  return (
    <div><Header/>
    <div>
        Browse</div></div>
  )
}
