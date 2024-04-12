import { useSelector } from 'react-redux'
import { addProductToCart } from 'redux/cart/slice'
import { useAppDispatch } from 'redux/redux-hook'
import { Product } from 'types'

export default function useCard() {
  const dispatch = useAppDispatch()


  const handleAddProductToCart = ({ ...product }: Product) => {
    dispatch(addProductToCart(product))
  }

  return [handleAddProductToCart]
}
