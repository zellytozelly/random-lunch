import { useAppSelector } from 'hooks'
import Card from 'routes/_shared/Card'
import { getFavoriteList } from 'states/food'
import { getFavoriteData } from 'utils/foodUtil'

import styles from './favorite.module.scss'

const Favorite = () => {
  const favoriteList = getFavoriteData(useAppSelector(getFavoriteList))

  return (
    <section className={styles.favoriteContainer}>
      <div className={styles.cardWrapper}>
        {favoriteList.map((item) => {
          return <Card key={item.id} foodItem={item} />
        })}
      </div>
    </section>
  )
}
export default Favorite
