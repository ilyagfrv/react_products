import { RootState } from 'redux/store'

export const selectFavoriteProducts = (state: RootState) => state.favorite.list
export const selectFavoriteProduct = (id: number) => (state: RootState) =>
  state.favorite.list.find((product) => product.id === id)
export const selectFavoriteProductQuantity = (state: RootState) =>
  state.favorite.list.length
