import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null,
        topRatedMovie:null,
        upcomingMovie:null,
        toggle:false
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload
        },
        getPopularMovie:(state, action)=>{
            state.popularMovie= action.payload
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovie = action.payload;
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle;
        }
    }

})

export const {getNowPlayingMovies, getPopularMovie, getTopRatedMovie, getUpcomingMovie, setToggle} = movieSlice.actions;
export default movieSlice.reducer;