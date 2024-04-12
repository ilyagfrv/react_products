import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'types'

type CartSlice = {
  list: Product[]
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
    addProductToCart(state, action: PayloadAction<Product>) {
      const findProduct = state.list.find(
        (product) => product.id === action.payload.id
      )

      if (findProduct) {
        if (findProduct.count) {
          findProduct.count++
        }
      } else {
        state.list.push({
          ...action.payload,
          count: 1,
        })
      }
      state.totalPrice = +state.list
        .reduce((sum, product) => sum + product.price * product.count!, 0)
        .toFixed(1)
    },
    deleteProductFromCart(state, action) {
      state.list = state.list.filter((product) => product.id !== action.payload)
    },
    resetTheCart() {
      return initialState
    },
  },
})

export const { addProductToCart, deleteProductFromCart, resetTheCart } =
  cartSlice.actions

export default cartSlice.reducer
