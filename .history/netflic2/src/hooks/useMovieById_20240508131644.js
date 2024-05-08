import React from "react";
import axios from "axios";

const useMovieById = async ()=>{
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
    }
    catch(error){
        console.log(error)
    }
}