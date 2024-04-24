import { Link } from 'react-router-dom'
import palm from 'assets/icons/palm.svg'
import style from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <section className={style.container}>
      <div className={style.content}>
        <img className={style.palm} src={palm} alt='' />
        <h1 className={style.title}>It seems You've got lost</h1>
        <Link className={style.link} to='/'>
          Go back
        </Link>
      </div>
    </section>
  )
}
