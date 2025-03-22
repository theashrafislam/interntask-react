import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../Features/useProfileSlice';

const store = configureStore({
    reducer: {
        profile: profileReducer,
    }
});

export default store;