import { MouseEvent, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from 'hooks'
import { setUnitName } from 'states/food'
import Button from './Button'
import Search from './Search'
import Dice from './Dice'

import styles from './header.module.scss'

const Header = () => {
  const dispatch = useAppDispatch()
  const currentUrl = useLocation()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleTitleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentUnitName = e.currentTarget.value
    dispatch(setUnitName(currentUnitName))
  }

  const handleRandomDiceClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentUnitName = e.currentTarget.value
    dispatch(setUnitName(currentUnitName))
  }

  useMemo(() => {
    if (currentUrl.pathname === '/favorite') setIsFavorite(true)
    else setIsFavorite(false)
  }, [currentUrl.pathname])

  return (
    <header className={styles.header}>
      <div className={styles.headerTitleWrapper}>
        <button type='button' className={styles.titleButtonWrapper} value='전체' onClick={handleTitleClick}>
          <h1>🍴 랜덤! 오늘의 점심메뉴</h1>
        </button>
        <button type='button' className={styles.titleDiceWrapper} value='전체' onClick={handleRandomDiceClick}>
          {/* <Dice value={5} /> */}
        </button>
      </div>

      {!isFavorite && (
        <>
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
        </>
      )}
    </header>
  )
}
export default Header
