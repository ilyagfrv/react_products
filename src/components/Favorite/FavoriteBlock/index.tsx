import { useSelector } from 'react-redux'
import style from './FavoriteBlock.module.scss'
import Card from 'components/Card'
import { selectFavoriteProducts } from 'redux/favorite/selectors'

export default function FavoriteBlock() {
  const favoriteProducts = useSelector(selectFavoriteProducts)

  return (
    <section className={style.container}>
      <h2 className={style.title}>Favorite</h2>

      <ul className={style.favorites}>
        {favoriteProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </ul>
    </section>
  )
}
