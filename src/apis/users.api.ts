import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateUserRequest } from '../dto/CreateUserRequest.dto';
import { User } from '../dto/User.dto';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/users',
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequest>({
      query: (createUserRequest) => ({
        url: '/signup',
        method: 'POST',
        body: createUserRequest,
      }),
    }),
    getUser: build.query<User, undefined>({
      query: () => ({ url: '/' }),
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery } = usersApi;
