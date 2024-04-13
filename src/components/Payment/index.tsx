import { PiTrashSimpleFill } from 'react-icons/pi'
import { CgDollar } from 'react-icons/cg'
import style from './Payment.module.scss'
import usePayment from './usePayment'

export default function Payment() {
  const [totalPrice, productsQuantity, handleResetCart] = usePayment()

  return (
    <div className={style.payment}>
      <button className={style.paymentBtn} type='button'>
        proceed to payment
      </button>

      <div className={style.container}>
        <h4 className={style.paymentTitle}>Your cart</h4>
        <PiTrashSimpleFill className={style.trash} onClick={handleResetCart} />
      </div>

      <div className={style.paymentInfo}>
        <div>
          Products{' '}
          <span className={style.paymentQuantity}>{productsQuantity}</span>
        </div>
        <div>
          <CgDollar />
          {totalPrice}
        </div>
      </div>
    </div>
  )
}
