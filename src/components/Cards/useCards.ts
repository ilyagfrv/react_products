import * as React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import {
  selectCategory,
  selectSortByPrice,
  selectTitleFilter,
} from 'redux/filter/selectors'
import { selectProducts } from 'redux/products/selectors'
import { fetchProductsByCategory } from 'redux/products/asyncActions'
import { Product } from 'types'

export default function useCards(): [string, Product[]] {
  const dispatch = useAppDispatch()
  const { status, list } = useSelector(selectProducts)
  const category = useSelector(selectCategory)
  const titleFilter = useSelector(selectTitleFilter)
  const priceFilter = useSelector(selectSortByPrice)

  React.useEffect(() => {
    dispatch(
      fetchProductsByCategory(
        `https://fbb676a55cfb0d88.mokky.dev/products?category=${category}&sortBy=${priceFilter}`
      )
    )
  }, [category, priceFilter, dispatch])

  const filteredCards = list.filter((card: Product) => {
    const matchesCards = card.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    return matchesCards
  })

  return [status, filteredCards]
}
