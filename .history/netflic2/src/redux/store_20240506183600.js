import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice.j';
const store = configureStore({
    reducer:{
        user:userReducer

    }
})

export default store;
