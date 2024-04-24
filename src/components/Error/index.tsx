import img from 'assets/icons/icon-empty.svg'
import style from './Error.module.scss'

export const Error = () => {
  return (
    <div className={style.container}>
      <img className={style.image} src={img} alt='' />
      <h2 className={style.title}>Unfortunately something went wrong</h2>
      <h3 className={style.subtitle}>Please try again later</h3>
    </div>
  )
}
