import { createSlice } from "@reduxjs/toolkit";

export const menuactiveSlice = createSlice({
    name: 'menuactive',
    initialState:{
        isActive: false
    },
    reducers: {
        toggleMenu : (state) => {state.isActive = !state.isActive},
        trueMenu : (state) => {state.isActive = true},
    }
})

export const {toggleMenu,trueMenu} = menuactiveSlice.actions

export default menuactiveSlice.reducer