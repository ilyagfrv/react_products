import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'redux/redux-hook'
import { fetchProductDetails } from 'redux/details/asyncActions'
import { clearDetails } from 'redux/details/slice'
import {
  selectDetailStatus,
  selectProductDetails,
} from 'redux/details/selectors'
import { Product, ProductLoader } from 'components'

export default function Details() {
  const dispatch = useAppDispatch()
  const details = useSelector(selectProductDetails)
  const status = useSelector(selectDetailStatus)
  const { id } = useParams()

  useEffect(() => {
    dispatch(
      fetchProductDetails(`https://fbb676a55cfb0d88.mokky.dev/products/${id}`)
    )

    return () => {
      dispatch(clearDetails())
    }
  }, [id, dispatch])

  return (
    <section className='container'>
      {status === 'loading' ? <ProductLoader /> : <Product {...details!} />}
    </section>
  )
}
