import style from './Cards.module.scss'
import { Card, CardLoader } from 'components'
import useProducts from './useProducts'

export default function Cards() {
  const [status, filteredProducts] = useProducts()

  const skeletons = [...new Array(8)].map((_, index) => (
    <li key={index}>
      <CardLoader />
    </li>
  ))
  const cards = filteredProducts.map((product) => (
    <Card key={product.id} {...product} />
  ))

  return (
    <ul className={style.products}>
      {status === 'loading' ? skeletons : cards}
    </ul>
  )
}
