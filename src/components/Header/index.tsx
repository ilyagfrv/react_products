import { HiShoppingCart } from 'react-icons/hi2'
import { GiHeartKey } from 'react-icons/gi'
import { CgDollar } from 'react-icons/cg'
import lemon from 'assets/icons/lemon.svg'
import style from './Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <a href='/'>
        <h1 className={style.title}>The freshest products</h1>
        <img className={style.lemon} src={lemon} alt='' />
      </a>

      <div className={style.actions}>
        <a className={style.favorite} href='#'>
          <GiHeartKey />
          <span>Favorite</span>
        </a>

        <a className={style.cart} href='#'>
          <HiShoppingCart />
          <span>Cart</span>
        </a>

        <h4 className={style.cost}>
          28.4 <CgDollar />
        </h4>
      </div>
    </header>
  )
}
