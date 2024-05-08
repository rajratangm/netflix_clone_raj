import React from "react";
import axios from "axios";
import {options} from '../utils/constants'

const useMovieById = async (movieId)=>{
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        console.log(res.data.results)
        const trailer = res?.data?.results?.filter((item)=>{
            return item.type=== 'Trailer'
        })
        console.log(trailer)
    }
    catch(error){
        console.log(error)
    }
}

export default useMovieById