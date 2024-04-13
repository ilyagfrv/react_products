import { Link } from 'react-router-dom'
import icon from 'assets/icons/icon-empty.svg'
import style from './CartEmpty.module.scss'

export default function CartEmpty() {
  return (
    <div className={style.container}>
      <img className={style.icon} src={icon} alt='' />
      <h2 className={style.title}>The cart is empty</h2>
      <Link className={style.link} to='/'>
        start shopping
      </Link>
    </div>
  )
}
