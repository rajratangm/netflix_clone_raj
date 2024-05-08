import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        popularMovie:null
    },
    reducers:{
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =action.payload
        },
        getPopluarMovie:(state, action)=>{
            state.popularMovie= action.payload
        }
    }

})

export const {getNowPlayingMovies, GET} = movieSlice.actions;
export default movieSlice.reducer;