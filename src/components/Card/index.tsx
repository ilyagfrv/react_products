import { CgDollar } from 'react-icons/cg'
import { IoMdHeartEmpty } from 'react-icons/io'
import style from './Card.module.scss'
import { Product } from 'types'
import useCard from './useCard'

export default function Card(product: Product) {
  const { id, image, title, price, weight, count } = product
  const [addProductToCart, cartProduct] = useCard(id)
  const productCount = cartProduct ? cartProduct.count : 0

  return (
    <li className={style.card}>
      <img className={style.image} src={`images/${image}`} alt='' />
      <h4 className={style.name}>{title}</h4>

      <div className={style.details}>
        <h4 className={style.price}>
          <CgDollar />
          {price} - 1 <span>{weight}</span>
        </h4>

        <div className={style.block}>
          {productCount > 0 && (
            <h4 className={style.counter}>{productCount}</h4>
          )}
          <IoMdHeartEmpty className={style.heart} />
        </div>
      </div>

      <button
        className={style.button}
        onClick={() => addProductToCart({ id, image, title, price, count })}
      >
        add to cart
      </button>
    </li>
  )
}
