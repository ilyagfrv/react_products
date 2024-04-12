import { PiTrashSimpleFill } from 'react-icons/pi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosHeart } from 'react-icons/io'
import { CgDollar } from 'react-icons/cg'
import style from './CartProduct.module.scss'
import { Product } from 'types'

export default function CartProduct({ image, title, price, count }: Product) {
  return (
    <li className={style.product}>
      <img className={style.image} src={`images/${image}`} alt='' />

      <div className={style.nameContainer}>
        <h4 className={style.name}>{title}</h4>
        <div className={style.actions}>
          <IoIosHeart className={style.icon} />
          <PiTrashSimpleFill className={style.icon} />
        </div>
      </div>

      <h4 className={style.price}>
        <CgDollar />
        {price}
      </h4>

      <div>
        <button className={style.btn}>
          <FaMinus />
        </button>
        <button className={style.btn}>
          <FaPlus />
        </button>
      </div>
      <div className={style.count}>{count}</div>
    </li>
  )
}
