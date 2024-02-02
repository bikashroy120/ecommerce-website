import {apiSlice} from "../api/apiSlice";


export const bannerApi = apiSlice.injectEndpoints({
    endpoints:(builder)=>({

        getAllBanner:builder.query({
            query:(query)=>({
                url:`banner/all-banner${query}`,
                method:"GET",
            })
        }),
    })
})


export const {useGetAllBannerQuery} = bannerApi;