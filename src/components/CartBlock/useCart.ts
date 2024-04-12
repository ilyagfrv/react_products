import { useDispatch, useSelector } from 'react-redux'
import { selectCartProducts } from 'redux/cart/selectors'

export default function useCart() {
  const dispatch = useDispatch()
  const products = useSelector(selectCartProducts)

  return [products]
}
