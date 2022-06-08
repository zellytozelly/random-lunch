import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface FoodState {
  unitName: string
  favoriteList: number[]
  searchValue: string
}

const INITIAL_STATE: FoodState = {
  unitName: '전체',
  favoriteList: store.get('food.favorite') || [],
  searchValue: '',
}

const foodSlice = createSlice({
  name: 'food',
  initialState: INITIAL_STATE,
  reducers: {
    setUnitName: (state: FoodState, action: PayloadAction<string>) => {
      const newUnitName = action.payload
      state.unitName = newUnitName
    },

    setFavoriteList: (state: FoodState, action: PayloadAction<number>) => {
      const newFavoriteId = action.payload
      state.favoriteList.push(newFavoriteId)
      store.set('food.favorite', state.favoriteList)
    },

    removeFavoriteList: (state: FoodState, action: PayloadAction<number>) => {
      const removeFavoriteId = action.payload
      const removeFavoriteData = state.favoriteList.filter((item) => item !== removeFavoriteId)
      state.favoriteList = [...removeFavoriteData]
      store.set('food.favorite', state.favoriteList)
    },

    setSearchValue: (state: FoodState, action: PayloadAction<string>) => {
      const newSearchValue = action.payload
      state.searchValue = newSearchValue
    },
  },
})

export const { setUnitName, setFavoriteList, removeFavoriteList, setSearchValue } = foodSlice.actions

export default foodSlice.reducer

// Selector =====================

export const getUnitName = (state: RootState): string => state.food.unitName
export const getFavoriteList = (state: RootState): number[] => state.food.favoriteList
export const getSearchValue = (state: RootState): string => state.food.searchValue
