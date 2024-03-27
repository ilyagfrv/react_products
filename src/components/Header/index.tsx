import { HiShoppingCart } from 'react-icons/hi2'
import { FaRubleSign } from 'react-icons/fa'
import { GiHeartKey } from 'react-icons/gi'
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
        <div className={style.favorite}>
          <a href='#' target='_blank'>
            <GiHeartKey />
            <span>Favorite</span>
          </a>
        </div>

        <div className={style.cart}>
          <a href='#'>
            <HiShoppingCart />
            <span>Cart</span>
          </a>
        </div>

        <h4 className={style.cost}>
          1230 <FaRubleSign />
        </h4>
      </div>
    </header>
  )
}
