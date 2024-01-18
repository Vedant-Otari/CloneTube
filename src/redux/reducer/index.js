import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    videos:[]
}

export const slice = createSlice({
    name:'Videos',
    initialState,
    reducers:{}
})

export default slice.reducer;