import { PiTrashSimpleFill } from 'react-icons/pi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosHeart } from 'react-icons/io'
import { CgDollar } from 'react-icons/cg'
import style from './CartProduct.module.scss'
import { SimplifiedProductType } from 'types'
import { useAppDispatch } from 'redux/redux-hook'
import {
  addProductToCart,
  deleteProductFromCart,
  decrementProductCount,
} from 'redux/cart/slice'

export default function CartProduct(product: SimplifiedProductType) {
  const { id, image, title, price, count } = product
  const dispatch = useAppDispatch()

  const handleDecrementProductCount = () => {
    dispatch(decrementProductCount(id))
  }

  const handleIncrementProductCount = () => {
    dispatch(addProductToCart({ id }))
  }

  const handleDeleteProductFromCart = () => {
    dispatch(deleteProductFromCart(id))
  }

  return (
    <li className={style.product}>
      <img className={style.image} src={`/images/${image}`} alt='' />

      <div className={style.nameContainer}>
        <h4 className={style.name}>{title}</h4>
        <div className={style.actions}>
          <IoIosHeart className={style.icon} />
          <PiTrashSimpleFill
            className={style.icon}
            onClick={handleDeleteProductFromCart}
          />
        </div>
      </div>

      <h4 className={style.price}>
        <CgDollar />
        {price}
      </h4>

      <div>
        <button className={style.btn} onClick={handleDecrementProductCount}>
          <FaMinus />
        </button>
        <button className={style.btn} onClick={handleIncrementProductCount}>
          <FaPlus />
        </button>
      </div>
      <div className={style.count}>{count}</div>
    </li>
  )
}
