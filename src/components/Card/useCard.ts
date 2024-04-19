import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { addProductToCart } from 'redux/cart/slice'
import { selectSingleProduct } from 'redux/cart/selectors'
import { CartProductType, FavoriteProductType } from 'types'
import { addProductToFavorite } from 'redux/favorite/slice'
import { selectFavoriteProduct } from 'redux/favorite/selectors'

export default function useCard(
  id: number
): [
  CartProductType | undefined,
  FavoriteProductType | undefined,
  (product: CartProductType) => void,
  (product: FavoriteProductType) => void
] {
  const dispatch = useAppDispatch()
  const cartProduct = useSelector(selectSingleProduct(id)) as
    | CartProductType
    | undefined
  const favoriteProduct = useSelector(selectFavoriteProduct(id)) as
    | FavoriteProductType
    | undefined

  const handleAddProductToCart = ({ ...product }: CartProductType) => {
    dispatch(addProductToCart(product))
  }

  const handleAddProductToFavorite = ({ ...product }: FavoriteProductType) => {
    dispatch(addProductToFavorite(product))
  }

  return [
    cartProduct,
    favoriteProduct,
    handleAddProductToCart,
    handleAddProductToFavorite,
  ]
}
