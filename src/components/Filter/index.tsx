import { useState, useRef, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import style from './Filter.module.scss'
import useFilter from './useFilter'

const listItems = ['cheaper', 'expensive']

export default function Filter() {
  const [isVisibleSortList, setIsVisibleSortList] = useState(false)
  const sortRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [titleFilter, handleTitleFilterChange, handleResetTitleFilter] =
    useFilter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsVisibleSortList(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={style.filters}>
      <div className={style.searchContainer}>
        <input
          className={style.search}
          type='text'
          placeholder='Try to find something'
          value={titleFilter}
          onChange={handleTitleFilterChange}
          ref={inputRef}
        />
        {titleFilter && (
          <IoCloseOutline
            className={style.clean}
            onClick={() => handleResetTitleFilter(inputRef)}
          />
        )}
      </div>

      <div
        className={style.sort}
        onClick={() => setIsVisibleSortList(!isVisibleSortList)}
        ref={sortRef}
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
