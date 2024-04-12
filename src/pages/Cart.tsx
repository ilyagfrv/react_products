import { CartEmpty, CartBlock } from 'components'
import { useSelector } from 'react-redux'
import { selectCartProducts } from 'redux/cart/selectors'

export default function Cart() {
  const products = useSelector(selectCartProducts)
  return <>{products.length > 0 ? <CartBlock /> : <CartEmpty />}</>
}
