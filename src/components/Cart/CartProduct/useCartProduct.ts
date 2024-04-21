import { useAppDispatch } from 'redux/redux-hook'
import {
  addProductToCart,
  deleteProductFromCart,
  decrementProductCount,
} from 'redux/cart/slice'
import { SimplifiedProductType } from 'types'
import { addProductToFavorite } from 'redux/favorite/slice'
import { useSelector } from 'react-redux'
import { selectFavoriteProduct } from 'redux/favorite/selectors'

export default function useCartProduct(
  id: number
): [
  SimplifiedProductType | undefined,
  (product: SimplifiedProductType) => void,
  () => void,
  () => void,
  () => void
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

  const handleDeleteProductFromCart = () => {
    dispatch(deleteProductFromCart(id))
  }

  const handleDecrementProductCount = () => {
    dispatch(decrementProductCount(id))
  }

  const handleIncrementProductCount = () => {
    dispatch(addProductToCart({ id } as SimplifiedProductType))
  }

  return [
    favoriteProduct,
    handleAddProductToFavorite,
    handleDeleteProductFromCart,
    handleDecrementProductCount,
    handleIncrementProductCount,
  ]
}
