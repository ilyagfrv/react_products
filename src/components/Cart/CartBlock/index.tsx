import style from './CartBlock.module.scss'
import { CartProduct, Payment } from 'components'
import useCart from './useCart'

export const CartBlock = () => {
  const [products] = useCart()

  return (
    <div className={style.cart}>
      <h2 className={style.title}>Cart</h2>

      <div className={style.container}>
        <ul className={style.products}>
          {products.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
        </ul>

        <Payment />
      </div>
    </div>
  )
}
