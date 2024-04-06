import { useAppDispatch } from 'redux/redux-hook'
import { setCategory } from 'redux/filter/slice'
import { useSelector } from 'react-redux'
import { selectCategory } from 'redux/filter/selectors'

export default function useSidebar(): [(title: string) => void, string] {
  const dispatch = useAppDispatch()
  const selectedCategory = useSelector(selectCategory)

  const handleSetCategory = (title: string) => {
    dispatch(setCategory(title))
  }

  return [handleSetCategory, selectedCategory]
}
