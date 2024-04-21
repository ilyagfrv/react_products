import { PiTrashSimpleFill } from 'react-icons/pi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosHeart } from 'react-icons/io'
import { CgDollar } from 'react-icons/cg'
import style from './CartProduct.module.scss'
import { SimplifiedProductType } from 'types'
import useCartProduct from './useCartProduct'

export default function CartProduct(product: SimplifiedProductType) {
  const { id, image, title, price, weight, count } = product
  const [
    favoriteProduct,
    addProductToFavorite,
    deleteProductFromCart,
    decrementProductCount,
    incrementProductCount,
  ] = useCartProduct(id)

  return (
    <li className={style.product}>
      <img className={style.image} src={`/images/${image}`} alt='' />

      <div className={style.container}>
        <h4 className={style.title}>{title}</h4>
        <div className={style.actions}>
          <IoIosHeart
            className={`${style.icon} ${
              favoriteProduct ? style.inFavorite : ''
            }`}
            onClick={() =>
              addProductToFavorite({
                id,
                image,
                title,
                price,
                weight,
                count,
              })
            }
          />
          <PiTrashSimpleFill
            className={style.icon}
            onClick={deleteProductFromCart}
          />
        </div>
      </div>

      <h4 className={style.price}>
        <CgDollar />
        {price}
      </h4>

      <div>
        <button
          className={style.btn}
          onClick={decrementProductCount}
          disabled={count === 1}
        >
          <FaMinus />
        </button>
        <button className={style.btn} onClick={incrementProductCount}>
          <FaPlus />
        </button>
      </div>
      <div className={style.count}>{count}</div>
    </li>
  )
}
