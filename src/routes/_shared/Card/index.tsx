import { useMemo, useState } from 'react'
import { cx } from 'styles'

import { useAppDispatch, useAppSelector } from 'hooks'
import { IFood } from 'types/foodData'
import { getFavoriteList, removeFavoriteList, setFavoriteList } from 'states/food'

import { HeartIcon } from 'assets/svgs'
import styles from './card.module.scss'

interface Props {
  foodItem: IFood
}

const Card = ({ foodItem }: Props) => {
  const dispatch = useAppDispatch()
  const favoriteList = useAppSelector(getFavoriteList)
  const [isFavorite, setIsFavorite] = useState(false)

  const handleHeartButtonClick = () => {
    setIsFavorite((prev) => !prev)
    if (!isFavorite) {
      dispatch(setFavoriteList(foodItem.id))
    } else {
      dispatch(removeFavoriteList(foodItem.id))
    }
  }

  useMemo(() => {
    if (favoriteList.includes(foodItem.id)) setIsFavorite(true)
  }, [favoriteList, foodItem.id])

  if (!foodItem) return null
  return (
    <section className={styles.cardContainer}>
      <img src={foodItem.foodImageUrl} alt={foodItem.menuName} />
      <form className={cx(styles.cardTitle, { [styles.isActive]: isFavorite })}>
        <h3>{foodItem.menuName}</h3>
        <label htmlFor={`heartCheckbox-${foodItem.id}`}>
          <HeartIcon />
        </label>
        <input
          id={`heartCheckbox-${foodItem.id}`}
          type='checkbox'
          checked={isFavorite}
          onChange={handleHeartButtonClick}
          className={styles.heartInput}
        />
      </form>
      <p>{foodItem.storeName}</p>
    </section>
  )
}
export default Card
