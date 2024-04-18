import { Filter, Cards, CardError } from 'components'
import { useSelector } from 'react-redux'
import { selectProducts } from 'redux/products/selectors'

export default function Content() {
  const { status } = useSelector(selectProducts)

  return (
    <section>
      {status === 'rejected' ? (
        <CardError />
      ) : (
        <>
          <Filter />
          <Cards />
        </>
      )}
    </section>
  )
}
