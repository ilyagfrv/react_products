import { IoIosArrowForward } from 'react-icons/io'
import style from './Sidebar.module.scss'
import useSidebar from './useSidebar'

const categories = [
  'vegetables',
  'fruits',
  'meat',
  'dairy',
  'bakery',
  'beverages',
]

export default function Sidebar() {
  const [handleSetCategory] = useSidebar()

  return (
    <aside className={style.sidebar}>
      <ul className={style.categories}>
        {categories.map((category, index) => (
          <li
            className={style.category}
            key={index}
            onClick={() => handleSetCategory(category)}
          >
            {category} <IoIosArrowForward className={style.arrow} />
          </li>
        ))}
      </ul>
    </aside>
  )
}
