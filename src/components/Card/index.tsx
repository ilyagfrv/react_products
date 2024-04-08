import { CgDollar } from 'react-icons/cg'
import style from './Card.module.scss'
import { Product } from 'types'

export default function Card({ image, title, price }: Product) {
  return (
    <li className={style.card}>
      <img className={style.image} src={`images/${image}`} alt='' />
      <h4 className={style.name}>{title}</h4>

      <div className={style.footer}>
        <h4 className={style.price}>
          <CgDollar />
          {price}
        </h4>
        <button className={style.button}>add to cart</button>
      </div>
    </li>
  )
}
