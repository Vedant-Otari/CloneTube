import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  selectedCategory: "New",
  sidebarchange: true,
  ChannelDetail:null,
  searchTerm:"",
  VideoDetail:null,
};

export const slice = createSlice({
  name: "Videos",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setsidebarchange: (state, action) => {
      state.sidebarchange = action.payload;
    },
    setvideos: (state, action) => {
        state.videos = action.payload
    },
    setChannelDetail: (state, action) => {
        state.ChannelDetail = action.payload
    },
    setSearchTerm:(state,action)=>{
        state.searchTerm = action.payload
    },
    setVideoDetail:(state,action)=>{
        state.VideoDetail = action.payload
    }
  },
});
export const { setVideoDetail, setSearchTerm,setSelectedCategory,setChannelDetail, setsidebarchange,setvideos } = slice.actions;
export default slice.reducer;
