import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";

type RegistrationResponse = {
  message: string;
  token: string;
  code: number;
};

type LoginResponse = {};

type RegistrationData = {};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegistrationResponse, RegistrationData>({
      query: (data) => ({
        url: "regester",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.token,
              code: result.data.code,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    activation: builder.mutation({
      query: ({ token, activitonnCode }) => ({
        url: "activate-user",
        method: "POST",
        body: {
          token,
          activitonnCode,
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "login",
        method: "POST",
        body: {
          email,
          password,
        },
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "token",
            JSON.stringify(result?.data?.accessToken)
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result?.data?.user,
            })
          );
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    logout: builder.query({
      query: (data) => ({
        url: "logout",
        method: "GET",
        credentials: "include" as const,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.removeItem("token");
          dispatch(userLoggedOut());
        } catch (error: any) {
          console.log(error);
        }
      },
    }),
    update: builder.mutation({
      query: ({ name, avater,phone,address }) => ({
        url: "update-user",
        method: "PUT",
        body: {
          name,
          avater,
          phone,
          address,
        },
        credentials: "include" as const,
      }),
    }),
    getAllUser: builder.query({
      query: (query: any) => ({
        url: `users?${query}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
        credentials: "include" as const,
      }),
    }),
    password: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: "POST",
        body:data,
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useLogoutQuery,
  useUpdateMutation,
  useGetAllUserQuery,
  useDeleteUserMutation,
  usePasswordMutation
} = authApi;
