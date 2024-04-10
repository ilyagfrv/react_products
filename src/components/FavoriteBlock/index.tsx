import { CgDollar } from 'react-icons/cg'
import style from './FavoriteBlock.module.scss'

export default function FavoriteBlock() {
  return (
    <section className={style.container}>
      <h2 className={style.title}>Favorite</h2>

      <ul className={style.favorites}>
        <li className={style.favorite}>
          <img className={style.image} src='images/apple-red.svg' alt='' />
          <h4 className={style.name}>Apple</h4>

          <div className={style.footer}>
            <h4 className={style.price}>
              <CgDollar />
              3.2
            </h4>
            <button className={style.button}>add to cart</button>
          </div>
        </li>
        <li className={style.favorite}>
          <img className={style.image} src='images/apple-gold.svg' alt='' />
          <h4 className={style.name}>Apple</h4>

          <div className={style.footer}>
            <h4 className={style.price}>
              <CgDollar />
              3.2
            </h4>
            <button className={style.button}>add to cart</button>
          </div>
        </li>
        <li className={style.favorite}>
          <img className={style.image} src='images/grape.svg' alt='' />
          <h4 className={style.name}>Grape</h4>

          <div className={style.footer}>
            <h4 className={style.price}>
              <CgDollar />
              3.2
            </h4>
            <button className={style.button}>add to cart</button>
          </div>
        </li>
        <li className={style.favorite}>
          <img className={style.image} src='images/banana.svg' alt='' />
          <h4 className={style.name}>Banana</h4>

          <div className={style.footer}>
            <h4 className={style.price}>
              <CgDollar />
              3.2
            </h4>
            <button className={style.button}>add to cart</button>
          </div>
        </li>
      </ul>
    </section>
  )
}
