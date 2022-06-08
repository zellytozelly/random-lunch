import data from 'assets/json/seoul_food.json'
import { IFood } from 'types/foodData'

// 버튼
export const getUtilNameData = (param: string) => {
  if (param === '전체') return data
  const utilNameData = data.filter((item) => item.foodUnit === param)
  if (!utilNameData) return []
  return utilNameData
}

// 검색
export const getSearchData = (param: string) => {
  if (!param || param === '') return data
  const searchData = data.filter((item) => item.menuName.includes(param))
  if (!searchData) return []
  return searchData
}

// 좋아요
export const getFavoriteData = (params: number[]) => {
  if (!params) return []
  const favoriteData = data.filter((item) => params.includes(item.id))
  if (!favoriteData) return []
  return favoriteData
}

// 랜덤
export const getRandomData = (array: IFood[]) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
