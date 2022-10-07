import { LoginRequest } from './../dto/LoginRequest.dto';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../dto/User.dto';
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/auth',
  }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginRequest>({
      query: (loginRequest) => ({
        url: '/login',
        method: 'POST',
        body: loginRequest,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
