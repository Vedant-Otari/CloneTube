import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../reducer";

const store = configureStore({
  reducer: videoReducer,
}); 

export default store;
