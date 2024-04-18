import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductType } from 'types'

export const fetchProductsByCategory = createAsyncThunk<ProductType[], string>(
  'products/fetchProductsByCategory',
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get<ProductType[]>(url)
      return data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data)
      } else {
        return thunkAPI.rejectWithValue(error)
      }
    }
  }
)
