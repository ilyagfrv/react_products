import style from './Products.module.scss'
import { ProductCard } from 'components'
import useProducts from './useProducts'

export default function Products() {
  const [products] = useProducts()

  return (
    <ul className={style.products}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </ul>
  )
}
