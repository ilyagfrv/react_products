import { CgDollar } from 'react-icons/cg'

import style from './ProductCard.module.scss'
import { Product } from 'types'

export default function ProductCard({ image, title, price }: Product) {
  return (
    <li className={style.product}>
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
