import { useSelector } from 'react-redux'
import { selectProducts } from 'redux/products/selectors'
import { Filter, Cards, Error } from 'components'

export const Content = () => {
  const { status } = useSelector(selectProducts)

  return (
    <section>
      {status === 'rejected' ? (
        <Error />
      ) : (
        <>
          <Filter />
          <Cards />
        </>
      )}
    </section>
  )
}
