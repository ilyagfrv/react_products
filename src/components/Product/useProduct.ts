import { addProductToCart } from 'redux/cart/slice'
import { useAppDispatch } from 'redux/redux-hook'
import { CartProductType } from 'types'

export default function useProduct() {
  const dispatch = useAppDispatch()

  const handleAddProductToCart = ({ ...product }: CartProductType) => {
    dispatch(addProductToCart(product))
  }

  return [handleAddProductToCart]
}
