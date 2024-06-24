import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import productsReducer from './productsSlice'
import { categoriesApi } from './categoriesApi'
import { productApi } from './productApi'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        products: productsReducer,
        categoriesApi: categoriesApi.reducer,
        productApi: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware).concat(productApi.middleware)
})