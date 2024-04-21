import { useSelector } from 'react-redux'
import { selectFavoriteProductQuantity } from 'redux/favorite/selectors'
import { selectCartProductQuantity, selectTotalPrice } from 'redux/cart/selectors'

export default function useHeader() {
  const totalPrice = useSelector(selectTotalPrice)
  const cartProductQuantity = useSelector(selectCartProductQuantity)
  const favoriteProductQuantity = useSelector(selectFavoriteProductQuantity)

  return [totalPrice, cartProductQuantity, favoriteProductQuantity]
}
