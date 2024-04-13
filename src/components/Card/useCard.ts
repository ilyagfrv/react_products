import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { addProductToCart } from 'redux/cart/slice'
import { selectSingleProduct } from 'redux/cart/selectors'
import { SpecialProduct } from 'types'

export default function useCard(
  id: number
): [(product: SpecialProduct) => void, SpecialProduct | undefined] {
  const dispatch = useAppDispatch()
  const cartProduct = useSelector(selectSingleProduct(id)) as
    | SpecialProduct
    | undefined

  const handleAddProductToCart = ({ ...product }: SpecialProduct) => {
    dispatch(addProductToCart(product))
  }

  return [handleAddProductToCart, cartProduct]
}
