import style from './Content.module.scss'
import { Filter, Products } from 'components'

export default function Content() {
  return (
    <section className={style.content}>
      <Filter />
      <Products />
    </section>
  )
}
