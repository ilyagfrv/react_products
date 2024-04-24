import { useState, useRef, useEffect } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import style from './Filter.module.scss'
import useFilter from './useFilter'

const listItems = [
  { key: 'price', value: 'cheaper' },
  { key: '-price', value: 'expensive' },
]

export const Filter = () => {
  const [isVisibleSortList, setIsVisibleSortList] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const sortRef = useRef<HTMLDivElement>(null)
  const [
    titleFilter,
    sortByPrice,
    handleTitleFilterChange,
    handleResetTitleFilter,
    handleSortByPrice,
    handleResetSortByPrice,
  ] = useFilter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsVisibleSortList(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const sortTitle =
    sortByPrice === 'price'
      ? 'cheaper'
      : 'price' && sortByPrice === '-price'
      ? 'expensive'
      : 'price'

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
            className={style.searchCleaner}
            onClick={() => handleResetTitleFilter(inputRef)}
          />
        )}
      </div>

      <div
        className={style.sortContainer}
        onClick={() => setIsVisibleSortList(!isVisibleSortList)}
        ref={sortRef}
      >
        <h4 className={style.sortTitle}>{sortTitle}</h4>

        {isVisibleSortList && (
          <ul className={style.sortList}>
            {listItems.map((item, index) => (
              <li
                className={style.sortItem}
                key={index}
                onClick={() => handleSortByPrice(item.key)}
              >
                {item.value}
              </li>
            ))}
          </ul>
        )}

        {sortByPrice && (
          <IoCloseOutline
            className={style.sortCleaner}
            onClick={() => handleResetSortByPrice()}
          />
        )}
      </div>
    </div>
  )
}
