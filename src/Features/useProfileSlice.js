import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice({
    name: 'profile',
    initialState: {
        data: null,
        loading: false,
        isError: null
    },
    reducers: {
        login: (state, action) => {
            state.data = action.payload
        },
        signUp: (state, action) => {
            state.data = action.payload
        }
    }
});

export const {login, signUp} = profile.actions;
export default profile.reducer;