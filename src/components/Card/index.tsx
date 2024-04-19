import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io'
import { CgDollar } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import style from './Card.module.scss'
import { ProductType } from 'types'
import useCard from './useCard'

export default function Card(product: ProductType) {
  const { id, image, title, price, weight, count } = product
  const [cartProduct, favoriteProduct, addProductToCart, addProductToFavorite] =
    useCard(id)
  const productCount = cartProduct ? cartProduct.count : 0

  return (
    <li className={style.card}>
      <Link className={style.link} to={`/products/${id}`}>
        <img className={style.image} src={`/images/${image}`} alt='' />
        <h4 className={style.name}>{title}</h4>
      </Link>

      <div className={style.details}>
        <h4 className={style.price}>
          <CgDollar />
          {price} - 1 <span>{weight}</span>
        </h4>

        <div className={style.block}>
          {productCount > 0 && (
            <h4 className={style.counter}>{productCount}</h4>
          )}
          {favoriteProduct ? (
            <IoMdHeart
              className={style.favorite}
              onClick={() =>
                addProductToFavorite({ id, image, title, price, weight, count })
              }
            />
          ) : (
            <IoMdHeartEmpty
              className={style.heart}
              onClick={() =>
                addProductToFavorite({ id, image, title, price, weight, count })
              }
            />
          )}
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
