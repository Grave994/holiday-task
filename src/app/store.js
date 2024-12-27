import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../api/userApi';
//store.js
export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});
