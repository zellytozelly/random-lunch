import data from 'assets/json/seoul_food.json'

// 랜덤

// 버튼
export const getUtilNameData = (param: string) => {
  if (param === '전체') return data
  const utilNameData = data.filter((item) => item.foodUnit === param)
  if (!utilNameData) return []
  return utilNameData
}

// 검색
