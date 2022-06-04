import { useEffect, useState } from 'react'

import { useAppSelector } from 'hooks'
import { getUnitName } from 'states/food'
import { getUtilNameData } from 'utils/foodUtil'
import Card from 'routes/_shared/Card'
import { IFood } from 'types/foodData'

import styles from './main.module.scss'

const Main = () => {
  const unitName = useAppSelector(getUnitName)
  const [updateData, setUpdateData] = useState<IFood[]>([])

  useEffect(() => {
    const result = getUtilNameData(unitName)
    setUpdateData(result)
  }, [unitName])

  return (
    <section className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {updateData.map((item) => {
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
