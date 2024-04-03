import { RootState } from 'redux/store'

export const selectProducts = (state: RootState) => state.products.list
export const selectStatus = (state: RootState) => state.products.status
