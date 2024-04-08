import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { resetTitleFilter, setTitleFilter } from 'redux/filter/slice'
import { selectTitleFilter } from 'redux/filter/selectors'

export default function useFilter(): [
  string,
  (e: React.FormEvent<HTMLInputElement>) => void,
  (ref: React.RefObject<HTMLInputElement>) => void
] {
  const dispatch = useAppDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.currentTarget.value))
  }

  const handleResetTitleFilter = (ref: React.RefObject<HTMLInputElement>) => {
    dispatch(resetTitleFilter())
    ref.current?.focus()
  }

  return [titleFilter, handleTitleFilterChange, handleResetTitleFilter]
}
