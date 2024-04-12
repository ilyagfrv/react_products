import { RootState } from 'redux/store'

export const selectTotalPrice = (state: RootState) => state.cart.totalPrice
export const selectCartProducts = (state: RootState) => state.cart.list
export const selectProductQuantity = (state: RootState) =>
  state.cart.list.length
export const selectSingleProduct = (id: number) => (state: RootState) =>
  state.cart.list.find((product) => product.id === id)
