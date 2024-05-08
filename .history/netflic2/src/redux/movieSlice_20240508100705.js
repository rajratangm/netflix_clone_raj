import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload
        },
        getPopluarMovie:(state, action)=>{
            state.popularMovie= action.payload
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
    }

})

export const {getNowPlayingMovies, getPopluarMovie, getTopRatedMovie, getUpcomingMovie} = movieSlice.actions;
export default movieSlice.reducer;