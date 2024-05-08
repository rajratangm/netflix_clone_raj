import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice.js';
import movieSlice from './movieSlice.js';
const store = configureStore({
    reducer:{
        app : userReducer

    }
})

export default store;
