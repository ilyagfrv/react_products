import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { addProductToCart } from 'redux/cart/slice'
import { selectSingleProduct } from 'redux/cart/selectors'
import { SimplifiedProductType } from 'types'

export default function useCard(
  id: number
): [
  (product: SimplifiedProductType) => void,
  SimplifiedProductType | undefined
] {
  const dispatch = useAppDispatch()
  const cartProduct = useSelector(selectSingleProduct(id)) as
    | SimplifiedProductType
    | undefined

  const handleAddProductToCart = ({ ...product }: SimplifiedProductType) => {
    dispatch(addProductToCart(product))
  }

  return [handleAddProductToCart, cartProduct]
}
