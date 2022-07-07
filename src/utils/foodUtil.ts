import data from 'assets/json/seoul_food.json'
import { IFood } from 'types/foodData'

// 버튼
export const getCategoryNameData = (categoryName: string) => {
  if (categoryName === '전체') return data
  const categoryNameData = data.filter((item) => item.foodUnit === categoryName)
  return categoryNameData
}

// 검색
export const getSearchData = (keyword: string) => {
  if (!keyword || keyword === '') return data
  const searchData = data.filter((item) => item.menuName.includes(keyword))
  return searchData
}

// 좋아요
export const getFavoriteData = (params: number[]) => {
  if (!params) return []
  const favoriteData = data.filter((item) => params.includes(item.id))
  return favoriteData
}

// 랜덤 (Fisher-Yates Shuffle)
// 1) 범위를 n-1씩 줄여가며 m번째 원소를 추출.
// 2) 추출한 원소는 기존 배열의 가장 뒤로 보내서 중복 추출을 방지.
export const getRandomData = (array: IFood[]) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
