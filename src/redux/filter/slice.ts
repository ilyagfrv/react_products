import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'types'

type FilterSlice = {
  category: string
  title: string
  price: string
}

const initialState: FilterSlice = {
  category: 'vegetables',
  title: '',
  price: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<Product['category']>) {
      state.category = action.payload
      state.title = ''
      state.price = ''
    },
    setTitleFilter(state, action: PayloadAction<Product['title']>) {
      state.title = action.payload
    },
    resetTitleFilter(state) {
      state.title = ''
    },
    setSortByPrice(state, action) {
      state.price = action.payload
    },
  },
})

export const { setCategory, setTitleFilter, resetTitleFilter, setSortByPrice } =
  filterSlice.actions

export default filterSlice.reducer
