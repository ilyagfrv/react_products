import { RootState } from 'redux/store'

export const selectCategory = (state: RootState) => state.filter.category
export const selectTitleFilter = (state: RootState) => state.filter.title
