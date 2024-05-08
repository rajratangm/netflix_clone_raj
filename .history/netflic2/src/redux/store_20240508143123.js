import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice.js';
import movieReducer from './movieSlice.js';
const store = configureStore({
    reducer:{
        app : userReducer,
        movie: movieReducer,
        searchMovie: searchSlive,

    }
})

export default store;
