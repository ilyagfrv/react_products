import { useSelector } from 'react-redux'
import { FavoriteBlock, FavoriteEmpty } from 'components'
import { selectFavoriteProducts } from 'redux/favorite/selectors'

export default function Favorite() {
  const favoriteProducts = useSelector(selectFavoriteProducts)

  return (
    <section>
      {favoriteProducts.length > 0 ? <FavoriteBlock /> : <FavoriteEmpty />}
    </section>
  )
}
