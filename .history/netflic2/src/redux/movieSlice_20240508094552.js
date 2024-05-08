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
            state.popularMovie
        }
    }

})

export const {getNowPlayingMovies} = movieSlice.actions;
export default movieSlice.reducer;