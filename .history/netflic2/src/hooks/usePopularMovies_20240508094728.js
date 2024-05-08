import React from 'react'
import axios from 'axios'
import { Popular_Movie, options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { getPopluarMovie } from '../redux/movieSlice'

const usePopularMovies= async()=>{
    const dispatch = useDispatch()
    try{
        const res = await axios.get(Popular_Movie, options)
        dispatch(getPopluarMovie())
        

    }
    catch(error){

    }

}

export default usePopularMovies