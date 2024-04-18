import { addProductToCart } from 'redux/cart/slice'
import { useAppDispatch } from 'redux/redux-hook'
import { SimplifiedProductType } from 'types'

export default function useProduct() {
  const dispatch = useAppDispatch()

  const handleAddProductToCart = ({ ...product }: SimplifiedProductType) => {
    dispatch(addProductToCart(product))
  }

  return [handleAddProductToCart]
}
