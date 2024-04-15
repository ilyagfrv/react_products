import { RootState } from 'redux/store'

export const selectProductDetails = (state: RootState) => state.details.product
export const selectDetailStatus = (state: RootState) => state.details.status
