import * as React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { selectProducts } from 'redux/products/selectors'
import { fetchProductsByCategory } from 'redux/products/asyncActions'

export default function useProducts() {
  const dispatch = useAppDispatch()
  const products = useSelector(selectProducts)

  React.useEffect(() => {
    dispatch(
      fetchProductsByCategory(
        `https://fbb676a55cfb0d88.mokky.dev/products?category=vegetables`
      )
    )
  }, [])

  return [products]
}
