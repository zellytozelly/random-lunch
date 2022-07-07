import { MouseEvent } from 'react'
import cx from 'classnames'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getCategoryName, setCategoryName } from 'states/food'

import styles from './button.module.scss'

interface Props {
  buttonName: string
}

const Button = ({ buttonName }: Props) => {
  const dispatch = useAppDispatch()
  const categoryName = useAppSelector(getCategoryName)

  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentCategoryName = e.currentTarget.value
    dispatch(setCategoryName(currentCategoryName))
  }

  if (!buttonName) return null

  return (
    <button
      type='button'
      value={buttonName}
      onClick={handleCategoryClick}
      className={cx(styles.foodButton, { [styles.buttonActive]: buttonName === categoryName })}
    >
      {buttonName}
    </button>
  )
}
export default Button
