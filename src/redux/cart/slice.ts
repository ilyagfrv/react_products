import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SpecialProduct } from 'types'

type CartSlice = {
  list: SpecialProduct[]
  totalPrice: number
}

const initialState: CartSlice = {
  list: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart(state, action: PayloadAction<SpecialProduct>) {
      const { id } = action.payload
      const existingProduct = state.list.find((product) => product.id === id)
      if (existingProduct) {
        existingProduct.count++
      } else {
        state.list.push({ ...action.payload, count: 1 })
      }
      state.totalPrice = +state.list
        .reduce((sum, product) => sum + product.price * (product.count || 1), 0)
        .toFixed(1)
    },
    decrementProductCount(state, action: PayloadAction<number>) {
      const productId = action.payload
      const existingProduct = state.list.find(
        (product) => product.id === productId
      )
      if (existingProduct) {
        existingProduct.count--
        state.totalPrice = +(state.totalPrice - existingProduct!.price).toFixed(
          1
        )
      }
    },
    deleteProductFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload
      const existingProduct = state.list.find(
        (product) => product.id === productId
      )
      if (existingProduct) {
        state.list = state.list.filter((product) => product.id !== productId)
        state.totalPrice = +(
          state.totalPrice -
          existingProduct.price * (existingProduct.count || 1)
        ).toFixed(1)
      }
    },
    resetTheCart() {
      return initialState
    },
  },
})

export const {
  addProductToCart,
  decrementProductCount,
  deleteProductFromCart,
  resetTheCart,
} = cartSlice.actions

export default cartSlice.reducer
