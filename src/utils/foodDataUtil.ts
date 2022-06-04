// import data from 'assets/json/seoul_food.json'
import { IFood } from 'types/foodData'

import data from 'assets/json/seoul_food.json'

// 랜덤 배열
// export const random

// 버튼 배열

interface FoodUnit {
  foodUnit: unitFood
}
export const getUnitNameData = (foodUnit: FoodUnit) => {
  // console.log(data)
  const result = data.filter((item) => {
    console.log(foodUnit)
    // console.log('item.foodUnit', item.foodUnit, 'foodUnit', foodUnit)
    const unit: string = foodUnit.foodUnit
    return item.foodUnit === unit
  })
  return result
}

// 검색 배열
