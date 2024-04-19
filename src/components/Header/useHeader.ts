import { useSelector } from 'react-redux'
import { selectProductQuantity, selectTotalPrice } from 'redux/cart/selectors'
import { selectFavoriteProductQuantity } from 'redux/favorite/selectors'

export default function useHeader() {
  const totalPrice = useSelector(selectTotalPrice)
  const cartProductQuantity = useSelector(selectProductQuantity)
  const favoriteProductQuantity = useSelector(selectFavoriteProductQuantity)

  return [totalPrice, cartProductQuantity, favoriteProductQuantity]
}
