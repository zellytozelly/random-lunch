import { configureStore } from '@reduxjs/toolkit'

import food from './food'

export const store = configureStore({
  reducer: {
    food,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
