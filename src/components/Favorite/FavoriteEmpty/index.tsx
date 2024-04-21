import { Link } from 'react-router-dom'
import icon from 'assets/icons/icon-empty.svg'
import style from './FavoriteEmpty.module.scss'

export default function FavoriteEmpty() {
  return (
    <div className={style.container}>
      <img className={style.icon} src={icon} alt='' />
      <h2 className={style.title}>There's no favorite yet</h2>
      <Link className={style.link} to='/'>
        go back
      </Link>
    </div>
  )
}
