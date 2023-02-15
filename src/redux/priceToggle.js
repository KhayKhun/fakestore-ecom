import { createSlice } from "@reduxjs/toolkit";

export const priceToggleSlice = createSlice({
    name: 'priceToggle',
    initialState:{
        isHigh: true
    },
    reducers: {
        togglePrice : (state) => {state.isHigh = !state.isHigh},
    }
})

export const {togglePrice} = priceToggleSlice.actions

export default priceToggleSlice.reducer