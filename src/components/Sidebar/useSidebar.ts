import { useAppDispatch } from 'redux/redux-hook'
import { setCategory } from 'redux/filter/slice'

export default function useSidebar() {
  const dispatch = useAppDispatch()

  const handleSetCategory = (name: string) => {
    dispatch(setCategory(name))
  }

  return [handleSetCategory]
}
