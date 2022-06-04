import Card from 'routes/_shared/Card'

import styles from './main.module.scss'

const Main = () => {
  return (
    <section className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        <Card foodImage='https://picsum.photos/200/100' foodName='된장찌개' restaurantName='최고집 청국장' />
        <Card foodImage='https://picsum.photos/500/300' foodName='김치찌개' restaurantName='김치장인' />
        <Card foodImage='https://picsum.photos/400/600' foodName='순대국' restaurantName='제일 맛있는 순대국가게' />
        <Card foodImage='https://picsum.photos/500/300' foodName='순두부찌개' restaurantName='집밥' />
        <Card foodImage='https://picsum.photos/200/100' foodName='된장찌개' restaurantName='최고집 청국장' />
        <Card foodImage='https://picsum.photos/500/300' foodName='김치찌개' restaurantName='김치장인' />
        <Card
          foodImage='https://picsum.photos/400/600'
          foodName='순대국'
          restaurantName='제일 맛있는 순대국가게 짜라짜라짠짠짠 짜라짜라짠짠짠 짜라짜라짠짠짠 짜라짜라짠짠짠'
        />
        <Card foodImage='https://picsum.photos/500/300' foodName='순두부찌개맛있는메뉴' restaurantName='집밥' />
        <Card foodImage='https://picsum.photos/200/100' foodName='된장찌개' restaurantName='최고집 청국장' />
        <Card foodImage='https://picsum.photos/500/300' foodName='김치찌개' restaurantName='김치장인' />
        <Card foodImage='https://picsum.photos/400/600' foodName='순대국' restaurantName='제일 맛있는 순대국가게' />
        <Card foodImage='https://picsum.photos/500/300' foodName='순두부찌개' restaurantName='집밥' />
        <Card foodImage='https://picsum.photos/200/100' foodName='된장찌개' restaurantName='최고집 청국장' />
        <Card foodImage='https://picsum.photos/500/300' foodName='김치찌개' restaurantName='김치장인' />
        <Card foodImage='https://picsum.photos/400/600' foodName='순대국' restaurantName='제일 맛있는 순대국가게' />
        <Card foodImage='https://picsum.photos/500/300' foodName='순두부찌개' restaurantName='집밥' />
      </div>
    </section>
  )
}
export default Main
