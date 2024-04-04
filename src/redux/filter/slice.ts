import { createSlice } from '@reduxjs/toolkit'

type FilterSlice = {
  category: string
}

const initialState: FilterSlice = {
  category: 'vegetables',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload
    },
  },
})

export const { setCategory } = filterSlice.actions
export default filterSlice.reducer
