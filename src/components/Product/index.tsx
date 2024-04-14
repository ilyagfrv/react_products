import { CgDollar } from 'react-icons/cg'
import { ProductType } from 'types'
import style from './Product.module.scss'

export default function Product(product: ProductType) {
  const { title, image, price, brand, weight, country, expirationDate } =
    product

  return (
    <div className={style.product}>
      <div className={style.leftSide}>
        <h2 className={style.title}>{title}</h2>
        <img src={`/images/${image}`} alt={title} className={style.image} />
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
  )
}
