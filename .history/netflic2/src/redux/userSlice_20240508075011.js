import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null,
        isLoading:false
    },
    reducers:{
        // action
        setUser:(state, action)=>{
            state.user= action.payload;
        },
        setLoading:

    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;