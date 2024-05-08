import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice.js';
import mov
const store = configureStore({
    reducer:{
        app : userReducer

    }
})

export default store;
