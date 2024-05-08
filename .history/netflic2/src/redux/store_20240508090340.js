import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice.js';
import movieR from './movieSlice.js';
const store = configureStore({
    reducer:{
        app : userReducer,
        movie: movie

    }
})

export default store;
