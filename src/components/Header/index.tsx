import { Link } from 'react-router-dom'
import { HiShoppingCart } from 'react-icons/hi2'
import { GiHeartKey } from 'react-icons/gi'
import { CgDollar } from 'react-icons/cg'
import lemon from 'assets/icons/lemon.svg'
import style from './Header.module.scss'
import useHeader from './useHeader'

export default function Header() {
  const [totalPrice, productQuantity] = useHeader()

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
          {/* <span className={style.favoriteQty}></span> */}
        </Link>

        <Link className={style.cart} to='/cart'>
          <HiShoppingCart />
          <span>Cart</span>
          {!!productQuantity && (
            <span className={style.cartQty}>{productQuantity}</span>
          )}
        </Link>

        <h4 className={style.cost}>
          {totalPrice} <CgDollar />
        </h4>
      </div>
    </header>
  )
}
