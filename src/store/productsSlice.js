import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (categoryId = 0, thunkApi) => {
        try {
            let url;
            if (categoryId) url = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`
            else url = 'https://api.escuelajs.co/api/v1/products/'

            const response = await fetch(url)

            if (!response.ok) throw new Error('Ошибка на стороне сервера!')
            
            const products = await response.json()

            return {products, categoryId}
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)


const productsSlice = createSlice({
    name: 'products',
    initialState: {products: [],
        isLoading: null,
        error: null,
        categoryId: 0
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.isLoading = false
            state.error = null
            state.categoryId = action.payload.categoryId
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.products = []
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default productsSlice.reducer