import { useAppSelector } from 'hooks'
import { useEffect } from 'react'
import Card from 'routes/_shared/Card'
import { getFavoriteList } from 'states/food'

import styles from './favorite.module.scss'

const Favorite = () => {
  const favoriteList = useAppSelector(getFavoriteList)

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
