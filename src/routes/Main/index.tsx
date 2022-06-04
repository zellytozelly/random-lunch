import Card from 'routes/_shared/Card'

import data from 'assets/json/seoul_food.json'
import styles from './main.module.scss'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {data.map((item) => {
          return (
            <Card
              key={item.id}
              foodImage={item.foodImageUrl}
              foodName={item.menuName}
              restaurantName={item.storeName}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Main
