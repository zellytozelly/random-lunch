import Button from './Button'
import Search from './Search'

import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>🍴 랜덤! 오늘의 점심메뉴</h1>
      <div className={styles.searchWrapper}>
        <Search />
      </div>
      <div className={styles.buttonWrapper}>
        <Button buttonName='양식' isActive />
        <Button buttonName='한식' isActive={false} />
        <Button buttonName='일식' isActive={false} />
        <Button buttonName='중식' isActive={false} />
        <Button buttonName='그외' isActive={false} />
      </div>
    </header>
  )
}
export default Header
