import { FormEvent } from 'react'

import { SearchIcon } from 'assets/svgs'
import styles from './search.module.scss'

const Search = () => {
  const textArray = [
    '오늘 점심 뭐먹지?',
    '지금 생각나는 건?',
    '맛있는게 최고지😋',
    '배고프다...',
    '맛있는거 먹고 힘내자!',
    '오늘은 이게 땡기는데?',
    '그때 그거 뭐였더라?',
    '뭐 맛있는거 없나?',
    '앗! 오늘 이거 땡긴다!',
    '일단 아무거나 검색해볼까?',
  ]
  const randomNumber = Math.floor(Math.random() * textArray.length)

  const handleSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSearchFormSubmit}>
      <input type='text' className={styles.searchInput} placeholder={textArray[randomNumber]} />
      <button type='submit' className={styles.searchButton}>
        <SearchIcon />
      </button>
    </form>
  )
}
export default Search
