import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {theme: localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : true},
    reducers: {
        changeTheme(state) {
            localStorage.setItem('theme', !state.theme)
            state.theme = !state.theme
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer