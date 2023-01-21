import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './Features/Api/ApiSlice'

export const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    // [BlogSlice.reducerPath]: BlogSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
})