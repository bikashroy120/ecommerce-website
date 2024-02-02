import {apiSlice} from "../api/apiSlice";


export const categoryApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createCategory:builder.mutation({
            query:(data)=>({
                url:"create-category",
                method:"POST",
                body:data,
                credentials:"include",
            })
        }),
        getAllCategory:builder.query({
            query:(query)=>({
                url:`all-category?${query}`,
                method:"GET",
                credentials:"include",
            })
        }),
        deleteCategory:builder.mutation({
            query:(id)=>({
                url:`delete-category/${id}`,
                method:"DELETE",
                credentials:"include",
            })
        }),
        updateCategory:builder.mutation({
            query:({id,data})=>({
                url:`edit-category/${id}`,
                method:"PUT",
                body:data,
                credentials:"include" ,
            })
        }),
        getSingleCategory:builder.query({
            query:(id)=>({
                url:`single-category/${id}`,
                method:"GET",
                credentials:"include" ,
            })
        }),
    })
})


export const {useCreateCategoryMutation,useGetAllCategoryQuery,useDeleteCategoryMutation,useGetSingleCategoryQuery,useUpdateCategoryMutation} = categoryApi;