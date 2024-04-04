import { configureStore } from '@reduxjs/toolkit'
import products from './products/slice'
import filter from './filter/slice'

export const store = configureStore({
  reducer: { products, filter },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
