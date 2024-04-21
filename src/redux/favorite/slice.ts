import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplifiedProductType } from 'types'

type FavoriteSlice = {
  list: SimplifiedProductType[]
}

const initialState: FavoriteSlice = {
  list: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addProductToFavorite(state, action: PayloadAction<SimplifiedProductType>) {
      const { id } = action.payload
      const foundProduct = state.list.find((product) => product.id === id)
      if (foundProduct) {
        state.list = state.list.filter(
          (product) => product.id !== foundProduct.id
        )
      } else {
        state.list.push({ ...action.payload })
      }
    },
  },
})

export const { addProductToFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer
