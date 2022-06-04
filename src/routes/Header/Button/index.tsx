import cx from 'classnames'
import styles from './button.module.scss'

interface Props {
  buttonName: string
  isActive: boolean
}

const Button = ({ buttonName, isActive }: Props) => {
  if (!buttonName) return null

  return (
    // onClick={}
    <button type='button' className={cx(styles.foodButton, { [styles.buttonActive]: isActive })}>
      {buttonName}
    </button>
  )
}
export default Button
