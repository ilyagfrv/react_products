import { IoIosArrowForward } from 'react-icons/io'
import style from './Sidebar.module.scss'
import useSidebar from './useSidebar'

const categories = [
  'vegetables',
  'fruits',
  'bakery',
  'dairy',
  'sushi',
  'beverages',
]

export const Sidebar = () => {
  const [handleSetCategory, selectedCategory] = useSidebar()

  return (
    <aside className={style.sidebar}>
      <ul className={style.categories}>
        {categories.map((category, index) => (
          <li
            className={`${style.category} ${
              selectedCategory === category ? style.active : ''
            } `}
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
