import { IoIosArrowForward } from 'react-icons/io'
import style from './Sidebar.module.scss'

const categories = [
  'vegetables',
  'fruits',
  'meat',
  'dairy',
  'bakery',
  'beverages',
]

export default function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <nav>
        <ul className={style.categories}>
          {categories.map((category, index) => (
            <li className={style.category} key={index}>
              {category} <IoIosArrowForward className={style.arrow} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
