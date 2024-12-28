import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: '',
                method: 'POST',
                body: userData,
            }),
        }),
        checkEmail: builder.query({
            query: (email) => ({
                url: `/check-email?email=${email}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useRegisterUserMutation, useCheckEmailQuery } = userApi;
