import {apiSlice} from "../api/apiSlice";


export const bannerApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllBanner:builder.query({
            query:(query)=>({
                url:`banner/all-banner?${query}`,
                method:"GET",
            })
        }),
        getAllCategory:builder.query({
            query:(query)=>({
                url:`product-category?${query}`,
                method:"GET",
            })
        }),
        getAllProduct:builder.query({
            query:(query)=>({
                url:`product?${query}`,
                method:"GET",
            })
        }),
    })
})


export const {useGetAllBannerQuery,useGetAllCategoryQuery,useGetAllProductQuery} = bannerApi;