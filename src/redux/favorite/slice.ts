import { createSlice } from '@reduxjs/toolkit'
import { ProductType } from 'types'

type FavoriteSlice = {
  list: ProductType[]
}

const initialState: FavoriteSlice = {
  list: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addProductToFavorite(state, action) {
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
