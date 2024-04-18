import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProductsByCategory } from './asyncActions'
import { ProductType, StatusType } from 'types'

type ProductSlice = {
  list: ProductType[]
  status: StatusType
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
      state.list = []
    })
    builder.addCase(
      fetchProductsByCategory.fulfilled,
      (state, action: PayloadAction<ProductType[]>) => {
        state.status = 'received'
        state.list = action.payload
      }
    )
    builder.addCase(fetchProductsByCategory.rejected, (state) => {
      state.status = 'rejected'
      state.list = []
    })
  },
})

export default productSlice.reducer
