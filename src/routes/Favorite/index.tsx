import styles from './favorite.module.scss'

import { useAppSelector } from 'hooks'
import { getFavoriteList } from 'states/food'
import { getFavoriteData } from 'utils/foodUtil'

import Card from 'routes/_shared/Card'

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
