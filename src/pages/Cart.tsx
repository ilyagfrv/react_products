import { useSelector } from 'react-redux'
import { CartEmpty, CartBlock } from 'components'
import { selectCartProducts } from 'redux/cart/selectors'

export default function Cart() {
  const products = useSelector(selectCartProducts)

  return (
    <section>{products.length > 0 ? <CartBlock /> : <CartEmpty />}</section>
  )
}
