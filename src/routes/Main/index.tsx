import Card from 'routes/_shared/Card'

import styles from './main.module.scss'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}
export default Main
