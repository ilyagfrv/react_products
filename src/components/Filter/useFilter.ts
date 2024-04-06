import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { setTitleFilter } from 'redux/filter/slice'
import { selectTitleFilter } from 'redux/filter/selectors'

export default function useFilter(): [
  (e: React.FormEvent<HTMLInputElement>) => void,
  string
] {
  const dispatch = useAppDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.currentTarget.value))
  }

  return [handleTitleFilterChange, titleFilter]
}
