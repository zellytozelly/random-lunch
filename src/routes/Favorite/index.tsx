import Card from 'routes/_shared/Card'

import styles from './favorite.module.scss'

const Favorite = () => {
  return (
    <section className={styles.favoriteContainer}>
      <div className={styles.cardWrapper}>
        <Card foodImage='https://picsum.photos/200/100' foodName='된장찌개' restaurantName='최고집 청국장' />
        <Card foodImage='https://picsum.photos/500/300' foodName='김치찌개' restaurantName='김치장인' />
        <Card foodImage='https://picsum.photos/400/600' foodName='순대국' restaurantName='제일 맛있는 순대국가게' />
      </div>
    </section>
  )
}
export default Favorite
