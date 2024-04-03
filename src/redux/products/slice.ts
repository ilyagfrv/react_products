import { createSlice } from '@reduxjs/toolkit'
import { Product, Status } from 'types'
import { fetchProductsByCategory } from './asyncActions'

type ProductSlice = {
  list: Product[]
  status: Status
}

const initialState: ProductSlice = {
  list: [],
  status: 'idle',
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsByCategory.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
      state.status = 'received'
      state.list = action.payload
    })
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export default productSlice.reducer
