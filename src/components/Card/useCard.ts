import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { addProductToCart } from 'redux/cart/slice'
import { addProductToFavorite } from 'redux/favorite/slice'
import { selectCartProduct } from 'redux/cart/selectors'
import { selectFavoriteProduct } from 'redux/favorite/selectors'
import { SimplifiedProductType } from 'types'

export default function useCard(
  id: number
): [
  SimplifiedProductType | undefined,
  SimplifiedProductType | undefined,
  (product: SimplifiedProductType) => void,
  (product: SimplifiedProductType) => void
] {
  const dispatch = useAppDispatch()
  const cartProduct = useSelector(selectCartProduct(id)) as
    | SimplifiedProductType
    | undefined
  const favoriteProduct = useSelector(selectFavoriteProduct(id)) as
    | SimplifiedProductType
    | undefined

  const handleAddProductToCart = ({ ...product }: SimplifiedProductType) => {
    dispatch(addProductToCart(product))
  }

  const handleAddProductToFavorite = ({
    ...product
  }: SimplifiedProductType) => {
    dispatch(addProductToFavorite(product))
  }

  return [
    cartProduct,
    favoriteProduct,
    handleAddProductToCart,
    handleAddProductToFavorite,
  ]
}
