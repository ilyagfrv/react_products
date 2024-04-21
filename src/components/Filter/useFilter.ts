import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import {
  setTitleFilter,
  resetTitleFilter,
  setSortByPrice,
  resetSortByPrice,
} from 'redux/filter/slice'
import { selectTitleFilter, selectSortByPrice } from 'redux/filter/selectors'

export default function useFilter(): [
  string,
  string,
  (e: React.FormEvent<HTMLInputElement>) => void,
  (ref: React.RefObject<HTMLInputElement>) => void,
  (key: string) => void,
  () => void
] {
  const dispatch = useAppDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const sortByPrice = useSelector(selectSortByPrice)

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.currentTarget.value))
  }

  const handleResetTitleFilter = (ref: React.RefObject<HTMLInputElement>) => {
    dispatch(resetTitleFilter())
    ref.current?.focus()
  }

  const handleSortByPrice = (key: string) => {
    dispatch(setSortByPrice(key))
  }

  const handleResetSortByPrice = () => {
    dispatch(resetSortByPrice())
  }

  return [
    titleFilter,
    sortByPrice,
    handleTitleFilterChange,
    handleResetTitleFilter,
    handleSortByPrice,
    handleResetSortByPrice,
  ]
}
