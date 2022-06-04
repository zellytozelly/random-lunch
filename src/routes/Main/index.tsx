import { useEffect, useMemo, useState } from 'react'

import Card from 'routes/_shared/Card'

import noImage from 'assets/images/noImage.png'
import styles from './main.module.scss'

import { IFood } from 'types/foodData'

import { getUnitNameData } from 'utils/foodDataUtil'

/* 
## 버튼을 선택함에 따라 달라지는 화면
- 화면을 변경하려면 상태가 바뀌어야한다
1. 버튼에 각각 다른 값을 가지고있다
2. 값을 상태로 관리한다
3. 상태가 변경되면 데이터 다시 가져오기
4. 리액트는 형제 컴포넌트간에 상태 공유가 안된다 -> 부모 컴포넌트에 state
*/

const Main = (foodUnit: string) => {
  const [unitNameData, setUnitNameData] = useState<IFood[]>([])
  //    "foodUnit": "그외",   "그외" filter item.foodUnit === 'foodUnit'
  useEffect(() => {
    console.log(typeof foodUnit)
    const result = getUnitNameData(foodUnit)
    setUnitNameData(result)
  }, [foodUnit])

  return (
    <section className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {unitNameData.map((item) => {
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
