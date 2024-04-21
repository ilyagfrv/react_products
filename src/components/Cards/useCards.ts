import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchProductsByCategory } from 'redux/products/asyncActions'
import { selectProducts } from 'redux/products/selectors'
import {
  selectCategory,
  selectTitleFilter,
  selectSortByPrice,
} from 'redux/filter/selectors'
import { ProductType } from 'types'

export default function useCards(): [string, ProductType[]] {
  const dispatch = useAppDispatch()
  const { status, list } = useSelector(selectProducts)
  const category = useSelector(selectCategory)
  const titleFilter = useSelector(selectTitleFilter)
  const priceSort = useSelector(selectSortByPrice)

  useEffect(() => {
    dispatch(
      fetchProductsByCategory(
        `https://fbb676a55cfb0d88.mokky.dev/products?category=${category}&sortBy=${priceSort}`
      )
    )
  }, [category, priceSort, dispatch])

  const filteredCards = list.filter((card: ProductType) => {
    const matchesCards = card.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())

    return matchesCards
  })

  return [status, filteredCards]
}
