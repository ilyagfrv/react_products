import img from 'assets/icons/icon-empty.svg'
import style from './CardError.module.scss'

export default function CardError() {
  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt='' />
      <h2 className={style.title}>Unfortunately something went wrong</h2>
      <h3 className={style.subtitle}>Please try again later</h3>
    </div>
  )
}
