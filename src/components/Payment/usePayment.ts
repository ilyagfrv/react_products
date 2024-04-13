import { useSelector } from 'react-redux'
import { selectProductQuantity, selectTotalPrice } from 'redux/cart/selectors'
import { resetTheCart } from 'redux/cart/slice'
import { useAppDispatch } from 'redux/redux-hook'

export default function usePayment(): [number, number, () => void] {
  const dispatch = useAppDispatch()
  const totalPrice = useSelector(selectTotalPrice)
  const productsQuantity = useSelector(selectProductQuantity)

  const handleResetCart = () => {
    dispatch(resetTheCart())
  }

  return [totalPrice, productsQuantity, handleResetCart]
}
