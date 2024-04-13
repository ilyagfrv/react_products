import style from './Cards.module.scss'
import { Card, CardLoader } from 'components'
import useCards from './useCards'

export default function Cards() {
  const [status, filteredCards] = useCards()

  const skeletons = [...new Array(8)].map((_, index) => (
    <li key={index}>
      <CardLoader />
    </li>
  ))
  const cards = filteredCards.map((card) => <Card key={card.id} {...card} />)

  return (
    <>
      {status === 'rejected' ? (
        <h2>Error</h2>
      ) : (
        <ul className={style.cards}>
          {status === 'loading' ? skeletons : cards}
        </ul>
      )}
    </>
  )
}
