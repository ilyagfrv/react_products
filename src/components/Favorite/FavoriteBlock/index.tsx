import { useSelector } from 'react-redux'
import { selectFavoriteProducts } from 'redux/favorite/selectors'
import style from './FavoriteBlock.module.scss'
import { Card } from 'components'

export default function FavoriteBlock() {
  const favoriteProducts = useSelector(selectFavoriteProducts)

  return (
    <div className={style.container}>
      <h2 className={style.title}>Favorite</h2>

      <ul className={style.favorites}>
        {favoriteProducts.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </ul>
    </div>
  )
}
