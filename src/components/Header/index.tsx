import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi2'
import { GiHeartKey } from 'react-icons/gi'
import { CgDollar } from 'react-icons/cg'
import lemon from 'assets/icons/lemon.svg'
import style from './Header.module.scss'

export default function Header() {
  return (
    <header className={style.header}>
      <Link to='/'>
        <h1 className={style.title}>The freshest products</h1>
        <img className={style.lemon} src={lemon} alt='' />
      </Link>

      <div className={style.actions}>
        <Link className={style.favorite} to='/favorite'>
          <GiHeartKey />
          <span>Favorite</span>
        </Link>

        <Link className={style.cart} to='/cart'>
          <HiShoppingCart />
          <span>Cart</span>
        </Link>

        <h4 className={style.cost}>
          28.4 <CgDollar />
        </h4>
      </div>
    </header>
  )
}
