import { FaRubleSign } from 'react-icons/fa'
import image from 'assets/icons/lemon.svg'
import style from './Products.module.scss'

export default function Products() {
  return (
    <ul className={style.products}>
      <li className={style.product}>
        <img className={style.image} src={image} alt='' />
        <h4 className={style.name}>Lemon fresh</h4>

        <div className={style.footer}>
          <h4 className={style.price}>
            1000 <FaRubleSign />
          </h4>
          <button className={style.button}>add to cart</button>
        </div>
      </li>
    </ul>
  )
}
