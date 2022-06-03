import styles from './card.module.scss'
import noImage from 'assets/images/noImage.png'
import { HeartIcon } from 'assets/svgs'

interface Props {
  foodImage: string
  foodName: string
  restaurantName: string
}

const Card = ({ foodImage, foodName, restaurantName }: Props) => {
  if (!foodName) return null

  return (
    <section className={styles.cardContainer}>
      <img src={foodImage} alt={foodName} />
      <div className={styles.cardTitle}>
        <h3>{foodName}</h3>
        <button type='button'>
          <HeartIcon />
        </button>
      </div>
      <p>{restaurantName}</p>
    </section>
  )
}
export default Card
