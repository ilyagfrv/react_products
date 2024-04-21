import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { addProductToCart } from 'redux/cart/slice'
import { addProductToFavorite } from 'redux/favorite/slice'
import { selectFavoriteProduct } from 'redux/favorite/selectors'
import { SimplifiedProductType } from 'types'

export default function useProduct(
  id: number
): [
  SimplifiedProductType | undefined,
  (product: SimplifiedProductType) => void,
  (product: SimplifiedProductType) => void
] {
  const dispatch = useAppDispatch()
  const favoriteProduct = useSelector(selectFavoriteProduct(id)) as
    | SimplifiedProductType
    | undefined

  const handleAddProductToFavorite = ({
    ...product
  }: SimplifiedProductType) => {
    dispatch(addProductToFavorite(product))
  }

  const handleAddProductToCart = ({ ...product }: SimplifiedProductType) => {
    dispatch(addProductToCart(product))
  }

  return [favoriteProduct, handleAddProductToFavorite, handleAddProductToCart]
}
