import React from "react";
import axios from "axios";

const useMovieById = async (movieId)=>{
    try{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`);
    }
    catch(error){
        console.log(error)
    }
}