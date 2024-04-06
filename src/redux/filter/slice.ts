import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from 'types'

type FilterSlice = {
  category: string
  title: string
}

const initialState: FilterSlice = {
  category: 'vegetables',
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<Product['category']>) {
      state.category = action.payload
    },
    setTitleFilter(state, action: PayloadAction<Product['title']>) {
      state.title = action.payload
    },
  },
})

export const { setCategory, setTitleFilter } = filterSlice.actions
export default filterSlice.reducer
