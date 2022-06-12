import styles from './dice.module.scss'

interface Props {
  value: number
}

const Dice = ({ value }: Props) => {
  const pips = Number.isInteger(value)
    ? Array(value)
        .fill(0)
        .map((item) => <span className={styles.pip} key={value * item} />)
    : null
  return <div className={styles.face}>{pips}</div>
}
export default Dice
