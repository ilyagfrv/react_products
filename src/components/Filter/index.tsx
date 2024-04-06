import { useState, useRef, useEffect } from 'react'
import style from './Filter.module.scss'
import useFilter from './useFilter'

const listItems = ['cheaper', 'expensive']

export default function Filter() {
  const [isVisibleSortList, setIsVisibleSortList] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const [handleTitleFilterChange, titleFilter] = useFilter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsVisibleSortList(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={style.filters}>
      <input
        className={style.search}
        type='text'
        placeholder='Try to find something'
        value={titleFilter}
        onChange={handleTitleFilterChange}
      />

      <div
        className={style.sort}
        onClick={() => setIsVisibleSortList(!isVisibleSortList)}
        ref={ref}
      >
        <h4 className={style.sortTitle}>Sort</h4>

        {isVisibleSortList && (
          <ul className={style.sortList}>
            {listItems.map((item, index) => (
              <li className={style.sortItem} key={index}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
