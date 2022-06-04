import Button from './Button'
import Search from './Search'

import styles from './header.module.scss'

import { MouseEvent } from 'react'

interface Props {
  setFoodUnit: React.Dispatch<React.SetStateAction<string>>
}

const Header = ({ setFoodUnit }: Props) => {
  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setFoodUnit(event.currentTarget.value)
  }
  return (
    <header className={styles.header}>
      <h1>🍴 랜덤! 오늘의 점심메뉴</h1>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.buttonWrapper}>
        <Button buttonName='양식' isActive handleButtonClick={handleButtonClick} />
        <Button buttonName='한식' isActive={false} handleButtonClick={handleButtonClick} />
        <Button buttonName='일식' isActive={false} handleButtonClick={handleButtonClick} />
        <Button buttonName='중식' isActive={false} handleButtonClick={handleButtonClick} />
        <Button buttonName='그외' isActive={false} handleButtonClick={handleButtonClick} />
      </div>
    </header>
  )
}
export default Header
