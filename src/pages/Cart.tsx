import { useSelector } from 'react-redux'
import { CartBlock, CartEmpty } from 'components'
import { selectCartProducts } from 'redux/cart/selectors'

export default function Cart() {
  const cartProducts = useSelector(selectCartProducts)

  return (
    <section>{cartProducts.length > 0 ? <CartBlock /> : <CartEmpty />}</section>
  )
}
