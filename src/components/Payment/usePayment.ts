import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { resetTheCart } from 'redux/cart/slice'
import {
  selectTotalPrice,
  selectCartProductQuantity,
} from 'redux/cart/selectors'

export default function usePayment(): [number, number, () => void] {
  const dispatch = useAppDispatch()
  const totalPrice = useSelector(selectTotalPrice)
  const productsQuantity = useSelector(selectCartProductQuantity)

  const handleResetCart = () => {
    dispatch(resetTheCart())
  }

  return [totalPrice, productsQuantity, handleResetCart]
}
