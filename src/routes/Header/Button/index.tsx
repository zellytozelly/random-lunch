import cx from 'classnames'
import styles from './button.module.scss'
import { MouseEventHandler } from 'react'

interface Props {
  buttonName: string
  isActive: boolean
  handleButtonClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ buttonName, isActive, handleButtonClick }: Props) => {
  if (!buttonName) return null

  return (
    // onClick={}
    <button
      type='button'
      value={buttonName}
      className={cx(styles.foodButton, { [styles.buttonActive]: isActive })}
      onClick={handleButtonClick}
    >
      {buttonName}
    </button>
  )
}
export default Button
