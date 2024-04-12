import { CartProduct, Payment } from 'components'
import style from './CartBlock.module.scss'
import useCart from './useCart'

export default function CartBlock() {
  const [products] = useCart()

  return (
    <section className={style.cart}>
      <h2 className={style.title}>Cart</h2>

      <div className={style.container}>
        <ul className={style.products}>
          {products.map((product) => (
            <CartProduct key={product.id} {...product} />
          ))}
        </ul>

        <Payment />
      </div>
    </section>
  )
}
