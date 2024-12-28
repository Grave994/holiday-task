import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './../api/userApi';

const initialState = {
    emailExists: false,  
    loading: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmailExists: (state, action) => {
            state.emailExists = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.checkEmail.matchFulfilled, (state, action) => {
                state.emailExists = action.payload.exists;
            })
            .addMatcher(userApi.endpoints.checkEmail.matchRejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export const { setEmailExists, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
