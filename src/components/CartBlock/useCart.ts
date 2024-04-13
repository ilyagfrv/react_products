import { useSelector } from 'react-redux'
import { selectCartProducts } from 'redux/cart/selectors'

export default function useCart() {
  const products = useSelector(selectCartProducts)

  return [products]
}
