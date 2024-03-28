import image from 'assets/icons/lemon.svg'
import style from './Products.module.scss'

export default function Products() {
  return (
    <ul className={style.products}>
      <li className={style.product}>
        <img src={image} alt='' />
        <div>
          <h4>Lemon</h4>
          <h4>100 rub</h4>
        </div>
        <button>add to cart</button>
      </li>
    </ul>
  )
}
