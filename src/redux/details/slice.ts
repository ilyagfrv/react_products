import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProductDetails } from './asyncActions'
import { ProductType, StatusType } from 'types'

type DetailSlice = {
  product: ProductType | null
  status: StatusType
}

const initialState: DetailSlice = {
  product: null,
  status: 'idle',
}

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(
        fetchProductDetails.fulfilled,
        (state, action: PayloadAction<ProductType>) => {
          state.status = 'received'
          state.product = action.payload
        }
      ),
      builder.addCase(fetchProductDetails.rejected, (state) => {
        state.status = 'rejected'
      })
  },
})

export const { clearDetails } = detailSlice.actions

export default detailSlice.reducer
