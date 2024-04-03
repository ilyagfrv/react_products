import { CgDollar } from 'react-icons/cg'

import style from './ProductCard.module.scss'
import { Product } from 'types'

export default function ProductCard({ image, name, price }: Product) {
  return (
    <li className={style.product}>
      <img className={style.image} src={`images/${image}`} alt='' />
      <h4 className={style.name}>{name}</h4>

      <div className={style.footer}>
        <h4 className={style.price}>
          {price} <CgDollar />
        </h4>
        <button className={style.button}>add to cart</button>
      </div>
    </li>
  )
}
