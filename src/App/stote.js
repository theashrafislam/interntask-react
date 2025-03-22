import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../Features/useProfileSlice'

const store = configureStore({
    reducer: profileReducer
})


export default store;