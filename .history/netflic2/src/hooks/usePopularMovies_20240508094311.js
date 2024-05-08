import React from 'react'
import axios from 'axios'
import { Popular_Movie, options } from '../utils/constants'

const usePopularMovies= async()=>{
    try{
        const res = await axios.get(Popular_Movie, options)

    }
    catch(error){

    }

}

export default usePopularMovies