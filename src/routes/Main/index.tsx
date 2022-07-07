import { useEffect, useState } from 'react'
import styles from './main.module.scss'

import { useAppSelector } from 'hooks'
import { getSearchValue, getCategoryName } from 'states/food'
import { getRandomData, getCategorySearchData } from 'utils/foodUtil'
import { IFood } from 'types/foodData'

import Card from 'routes/_shared/Card'

const Main = () => {
  const [updateData, setUpdateData] = useState<IFood[]>([])
  const categoryName = useAppSelector(getCategoryName)
  const searchValue = useAppSelector(getSearchValue)

  useEffect(() => {
    const categorySearchResult = getCategorySearchData(categoryName, searchValue)
    const randomSearchResult = getRandomData(categorySearchResult)
    setUpdateData(randomSearchResult)
  }, [categoryName, searchValue])

  return (
    <section className={styles.mainContainer}>
      <div className={styles.cardWrapper}>
        {updateData.map((item) => {
          return <Card key={item.id} foodItem={item} />
        })}
      </div>
    </section>
  )
}
export default Main
