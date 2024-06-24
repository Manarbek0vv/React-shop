import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.escuelajs.co/api/v1/categories'}),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/'
        })
    })
})

export const { useGetCategoriesQuery } = categoriesApi