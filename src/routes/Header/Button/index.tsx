import { MouseEvent } from 'react'
import cx from 'classnames'

import { useAppDispatch, useAppSelector } from 'hooks'
import { getUnitName, setUnitName } from 'states/food'

import styles from './button.module.scss'

interface Props {
  buttonName: string
}

const Button = ({ buttonName }: Props) => {
  const dispatch = useAppDispatch()
  const unitName = useAppSelector(getUnitName)

  const handleUnitClick = (e: MouseEvent<HTMLButtonElement>) => {
    const currentUnitName = e.currentTarget.value
    dispatch(setUnitName(currentUnitName))
  }

  if (!buttonName) return null

  return (
    <button
      type='button'
      value={buttonName}
      onClick={handleUnitClick}
      className={cx(styles.foodButton, { [styles.buttonActive]: buttonName === unitName })}
    >
      {buttonName}
    </button>
  )
}
export default Button
