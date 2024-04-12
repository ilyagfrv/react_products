import { useSelector } from 'react-redux'
import { selectProductQuantity, selectTotalPrice } from 'redux/cart/selectors'

export default function useHeader() {
  const totalPrice = useSelector(selectTotalPrice)
  const productQuantity = useSelector(selectProductQuantity)

  return [totalPrice, productQuantity]
}
