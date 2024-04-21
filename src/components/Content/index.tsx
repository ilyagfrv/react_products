import { useSelector } from 'react-redux'
import { selectProducts } from 'redux/products/selectors'
import { Filter, Cards, Error, Scroll } from 'components'

export default function Content() {
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
