import { FavoriteEmpty, FavoriteBlock } from 'components'
import { useSelector } from 'react-redux'
import { selectFavoriteProductQuantity } from 'redux/favorite/selectors'

export default function Favorite() {
  const favoriteProductLength = useSelector(selectFavoriteProductQuantity)
  return (
    <div>{favoriteProductLength ? <FavoriteBlock /> : <FavoriteEmpty />}</div>
  )
}
