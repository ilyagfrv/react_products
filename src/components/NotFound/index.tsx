import { Link } from 'react-router-dom'
import style from './NotFoundBlock.module.scss'

export default function NotFoundBlock() {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <img className={style.palm} src='images/palm.svg' alt='' />
        <h1 className={style.title}>It seems You've got lost</h1>
        <Link className={style.link} to='/'>
          Go back
        </Link>
      </div>
    </section>
  )
}
