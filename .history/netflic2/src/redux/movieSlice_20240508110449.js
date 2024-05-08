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
        getPopluarMovie:(state, action)=>{
            state.popularMovie= action.payload
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovie = action.payload;
        },
        setToggle:(state)=>{
            state.toggler = ! state.toggle;
        }
    }

})

export const {getNowPlayingMovies, getPopluarMovie, getTopRatedMovie, getUpcomingMovie, setToggler} = movieSlice.actions;
export default movieSlice.reducer;