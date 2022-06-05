import { MouseEvent } from 'react'

import { useAppDispatch } from 'hooks'
import { setUnitName } from 'states/food'
import Button from './Button'
import Search from './Search'

import styles from './header.module.scss'

const Header = () => {
  const dispatch = useAppDispatch()

  const handleTitleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentUnitName = e.currentTarget.value
    dispatch(setUnitName(currentUnitName))
  }
  return (
    <header className={styles.header}>
      <button type='button' value='전체' onClick={handleTitleClick}>
        <h1>🍴 랜덤! 오늘의 점심메뉴</h1>
      </button>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.buttonWrapper}>
        <Button buttonName='양식' />
        <Button buttonName='한식' />
        <Button buttonName='일식' />
        <Button buttonName='중식' />
        <Button buttonName='그외' />
      </div>
    </header>
  )
}
export default Header
