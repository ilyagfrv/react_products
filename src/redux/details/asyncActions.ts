import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ProductType } from 'types'

export const fetchProductDetails = createAsyncThunk<ProductType, string>(
  'details/fetchProductDetails',
  async (url, thunkAPI) => {
    try {
      const { data } = await axios.get(url)
      return data
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error)
      }
    }
  }
)
