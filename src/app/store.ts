import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import auth from '../features/login/loginSlice'
import baseInfo from '../features/baseInfo/baseInfoSlice'
import partners from '../features/partners/partnersSlice'
import infoCards from '../components/info-cards/infoCardSlice'
import { api } from './services/api'
import { listnerMiddleware } from '../middleware/login'


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    baseInfo,
    partners,
    infoCards
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).prepend(listnerMiddleware.middleware)

})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
