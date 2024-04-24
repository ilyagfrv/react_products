import { useNavigate } from 'react-router-dom'

import { HiShoppingCart } from 'react-icons/hi2'
import { TiArrowBack } from 'react-icons/ti'
import { GiHeartKey } from 'react-icons/gi'
import { CgDollar } from 'react-icons/cg'

import style from './Product.module.scss'
import useProduct from './useProduct'
import { ProductType } from 'types'

export const Product = (product: ProductType) => {
  const {
    id,
    title,
    image,
    price,
    brand,
    weight,
    country,
    count,
    expirationDate,
  } = product
  const navigate = useNavigate()
  const [favoriteProduct, addProductToFavorite, addProductToCart] =
    useProduct(id)

  return (
    <div className={style.container}>
      <div>
        <h2 className={style.title}>{title}</h2>
        <img className={style.image} src={`/images/${image}`} alt='' />
      </div>

      <div className={style.rightSide}>
        <div className={style.actions}>
          <button className={style.action} onClick={() => navigate(-1)}>
            <TiArrowBack />
          </button>
          <button
            className={`${style.action} ${
              favoriteProduct ? style.favorite : ''
            }`}
            onClick={() =>
              addProductToFavorite({ id, image, title, price, weight, count })
            }
          >
            <GiHeartKey />
          </button>
          <button
            className={style.action}
            onClick={() =>
              addProductToCart({ id, image, title, price, weight, count })
            }
          >
            <HiShoppingCart />
          </button>
        </div>

        <ul className={style.info}>
          <li>Brand - "{brand}"</li>
          <li>Country - "{country}"</li>
          <li>
            Price - <CgDollar /> {price}
          </li>
          <li>1 - {weight}</li>
          <li>Expiration date - {expirationDate}</li>
        </ul>
      </div>
    </div>
  )
}
