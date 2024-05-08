import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
const store = configureStore({
    reducer:{
        user:userR

    }
})

export default store;
