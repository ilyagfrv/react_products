import style from './Products.module.scss'
import { Card, CardLoader } from 'components'
import useProducts from './useProducts'

export default function Products() {
  const [status, list] = useProducts()

  const skeletons = [...new Array(8)].map((_, index) => (
    <li key={index}>
      <CardLoader />
    </li>
  ))
  const products = list.map((product) => <Card key={product.id} {...product} />)

  return (
    <ul className={style.products}>
      {status === 'loading' ? skeletons : products}
    </ul>
  )
}
