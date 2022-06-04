import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

export interface FoodState {
  unitName: string
}

const INITIAL_STATE: FoodState = {
  unitName: '전체',
}

const foodSlice = createSlice({
  name: 'food',
  initialState: INITIAL_STATE,
  reducers: {
    setUnitName: (state: FoodState, action: PayloadAction<string>) => {
      const newUnitName = action.payload
      state.unitName = newUnitName
    },
  },
})

export const { setUnitName } = foodSlice.actions

export default foodSlice.reducer

// Selector =====================

export const getUnitName = (state: RootState): string => state.food.unitName
