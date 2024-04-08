import * as React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { selectCategory, selectTitleFilter } from 'redux/filter/selectors'
import { selectProducts } from 'redux/products/selectors'
import { fetchProductsByCategory } from 'redux/products/asyncActions'
import { Product } from 'types'

export default function useProducts(): [string, Product[]] {
  const dispatch = useAppDispatch()
  const { status, list } = useSelector(selectProducts)
  const category = useSelector(selectCategory)
  const titleFilter = useSelector(selectTitleFilter)

  React.useEffect(() => {
    dispatch(
      fetchProductsByCategory(
        `https://fbb676a55cfb0d88.mokky.dev/products?category=${category}`
      )
    )
  }, [category, dispatch])

  const filteredProducts = list.filter((product: Product) => {
    const matchesProducts = product.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    return matchesProducts
  })

  return [status, filteredProducts]
}
