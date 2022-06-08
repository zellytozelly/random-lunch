import { useEffect, useState } from 'react'

import { useAppSelector } from 'hooks'
import { getSearchValue, getUnitName } from 'states/food'
import { getRandomData, getSearchData, getUtilNameData } from 'utils/foodUtil'
import Card from 'routes/_shared/Card'
import { IFood } from 'types/foodData'

import styles from './main.module.scss'

const Main = () => {
  const [updateData, setUpdateData] = useState<IFood[]>([])
  const unitName = useAppSelector(getUnitName)
  const searchValue = useAppSelector(getSearchValue)

  useEffect(() => {
    const unitResult = getUtilNameData(unitName)
    const randomUnitResult = getRandomData(unitResult)
    setUpdateData(randomUnitResult)
  }, [unitName])

  useEffect(() => {
    const searchResult = getSearchData(searchValue)
    const randomSearchResult = getRandomData(searchResult)
    setUpdateData(randomSearchResult)
  }, [searchValue])

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
