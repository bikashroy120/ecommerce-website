import { apiSlice } from "../api/apiSlice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "user/regester",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userRegistration({
              token: result.data.token,
              code: "",
            })
          );
        } catch (error) {
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
        url: "user/login",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          console.log(result)

          // localStorage.setItem(
          //   "token",
          //   JSON.stringify(result?.data?.accessToken)
          // );
          // dispatch(
          //   userLoggedIn({
          //     accessToken: result.data.accessToken,
          //     user: result?.data?.user,
          //   })
          // );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    logout: builder.query({
      query: (data) => ({
        url: "logout",
        method: "GET",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.removeItem("token");
          dispatch(userLoggedOut());
        } catch (error) {
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
      }),
    }),
    getAllUser: builder.query({
      query: (query) => ({
        url: `users?${query}`,
        method: "GET",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `delete-user/${id}`,
        method: "DELETE",
      }),
    }),
    password: builder.mutation({
      query: (data) => ({
        url: `/update-password`,
        method: "POST",
        body:data,
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
