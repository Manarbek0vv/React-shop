import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1'}),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const { useGetProductQuery } = productApi