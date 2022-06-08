import { useState } from 'react'

import { IFood } from 'types/foodData'
import { removeFavoriteList, setFavoriteList } from 'states/food'

import { HeartIcon } from 'assets/svgs'
import styles from './card.module.scss'
import { useAppDispatch } from 'hooks'
import { cx } from 'styles'

interface Props {
  foodItem: IFood
}

const Card = ({ foodItem }: Props) => {
  const dispatch = useAppDispatch()
  const [isFavorite, setIsFavorite] = useState(false)

  const handleHeartButtonClick = () => {
    setIsFavorite((prev) => !prev)
    if (!isFavorite) {
      dispatch(setFavoriteList(foodItem))
    } else {
      dispatch(removeFavoriteList(foodItem))
    }
  }

  if (!foodItem) return null
  return (
    <section className={styles.cardContainer}>
      <img src={foodItem.foodImageUrl} alt={foodItem.menuName} />
      <div className={styles.cardTitle}>
        <h3>{foodItem.menuName}</h3>
        <button type='button' onClick={handleHeartButtonClick} className={cx({ [styles.isActive]: isFavorite })}>
          <HeartIcon />
        </button>
      </div>
      <p>{foodItem.storeName}</p>
    </section>
  )
}
export default Card
