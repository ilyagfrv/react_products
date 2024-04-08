import { PiTrashSimpleFill } from 'react-icons/pi'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { IoIosHeart } from 'react-icons/io'
import { CgDollar } from 'react-icons/cg'
import style from './CartBlock.module.scss'

export default function CartBlock() {
  return (
    <section className={style.cart}>
      <h2 className={style.title}>Cart</h2>

      <div className={style.container}>
        <ul className={style.products}>
          <li className={style.product}>
            <img
              className={style.image}
              src='images/ice-cream-cone.svg'
              alt=''
            />

            <div className={style.nameContainer}>
              <h4 className={style.name}>Ice Cream Cone Strawberry</h4>
              <div className={style.actions}>
                <IoIosHeart className={style.icon} />
                <PiTrashSimpleFill className={style.icon} />
              </div>
            </div>

            <h4 className={style.price}>
              <CgDollar />
              3.5
            </h4>

            <div>
              <button className={style.btn}>
                <FaMinus />
              </button>
              <button className={style.btn}>
                <FaPlus />
              </button>
            </div>
            <div className={style.count}>12</div>
          </li>
          <li className={style.product}>
            <img className={style.image} src='images/orange-soda.svg' alt='' />

            <div className={style.nameContainer}>
              <h4 className={style.name}>Orange Soda</h4>
              <div className={style.actions}>
                <IoIosHeart className={style.icon} />
                <PiTrashSimpleFill className={style.icon} />
              </div>
            </div>

            <h4 className={style.price}>
              <CgDollar />
              1.1
            </h4>

            <div className={style.actions}>
              <button className={style.btn}>
                <FaMinus />
              </button>
              <button className={style.btn}>
                <FaPlus />
              </button>
            </div>
            <div className={style.count}>3</div>
          </li>
          <li className={style.product}>
            <img
              className={style.image}
              src='images/sandwich-burger.svg'
              alt=''
            />

            <div className={style.nameContainer}>
              <h4 className={style.name}>Sandwich Burger</h4>
              <div className={style.actions}>
                <IoIosHeart className={style.icon} />
                <PiTrashSimpleFill className={style.icon} />
              </div>
            </div>

            <h4 className={style.price}>
              <CgDollar />
              4.1
            </h4>

            <div className={style.actions}>
              <button className={style.btn}>
                <FaMinus />
              </button>
              <button className={style.btn}>
                <FaPlus />
              </button>
            </div>
            <div className={style.count}>1</div>
          </li>
          <li className={style.product}>
            <img className={style.image} src='images/taco.svg' alt='' />

            <div className={style.nameContainer}>
              <h4 className={style.name}>Taco</h4>
              <div className={style.actions}>
                <IoIosHeart className={style.icon} />
                <PiTrashSimpleFill className={style.icon} />
              </div>
            </div>

            <h4 className={style.price}>
              <CgDollar />
              1.2
            </h4>

            <div className={style.actions}>
              <button className={style.btn}>
                <FaMinus />
              </button>
              <button className={style.btn}>
                <FaPlus />
              </button>
            </div>
            <div className={style.count}>2</div>
          </li>
        </ul>

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
      </div>
    </section>
  )
}
