import { Link } from 'react-router-dom'
import style from './EmptyCart.module.scss'

export default function EmptyCart() {
  return (
    <section className={style.container}>
      <img className={style.icon} src='images/empty-cart.svg' alt='' />
      <h2 className={style.title}>The cart is empty</h2>
      <Link className={style.link} to='/'>
        start shopping
      </Link>
    </section>
  )
}
