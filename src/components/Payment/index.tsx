import { CgDollar } from 'react-icons/cg'
import style from './Payment.module.scss'

export default function Payment() {
  return (
    <div className={style.payment}>
      <button className={style.paymentBtn} type='button'>
        proceed to payment
      </button>

      <h4 className={style.paymentTitle}>Your cart</h4>
      <div className={style.paymentInfo}>
        <div>
          Products <span className={style.paymentQuantity}>18</span>
        </div>
        <div>
          <CgDollar />
          11.2
        </div>
      </div>
    </div>
  )
}
