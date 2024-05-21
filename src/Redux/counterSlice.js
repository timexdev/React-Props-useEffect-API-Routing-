import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count : 0,
        allStudents : []
    },
    reducers : {
        increase : (state) =>{
            state.count = state.count + 1
        },
        decrease : (state) =>{
            state.count -= 1
        },
        increaseByNumber : (state,action) =>{
            state.count = state.count + action.payload
        }
    }
})

export default counterSlice.reducer 
export const {increase, decrease, increaseByNumber} = counterSlice.actions