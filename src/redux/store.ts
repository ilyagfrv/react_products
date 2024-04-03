import { configureStore } from '@reduxjs/toolkit'
import products from './products/slice'

export const store = configureStore({
  reducer: { products },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
