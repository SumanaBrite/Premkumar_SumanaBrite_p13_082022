import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../reducers/UserReducer'
import { loginReducer } from '../reducers/LoginReducer'
import {
  persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import logger from 'redux-logger'


const persistConfig = {
  key: 'persist-key',
  storage,
}
const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store



// import { configureStore } from '@reduxjs/toolkit'
// import { loginReducer } from '../reducers/LoginReducer'
// import { userReducer } from '../reducers/UserReducer'


// export const store = configureStore({
//   reducer: {
//     userLogin: loginReducer,
//     userProfile: userReducer
//   },
// })