// import { configureStore } from '@reduxjs/toolkit'

// import { userReducer } from '../reducers/UserReducer'
// import { loginReducer } from '../reducers/LoginReducer'

// const store = configureStore({
//   reducer: {
//     userLogin: loginReducer,
//     userProfile: userReducer,
//   }
// })
// export default store

import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'


// import { composeWithDevTools } from 'redux-devtools-extension'
// import ReduxThunk from 'redux-thunk'
import { userReducer } from '../reducers/UserReducer'
import { loginReducer } from '../reducers/LoginReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'persist-key',
  storage,
}
const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk))

// )
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})
export const persistor = persistStore(store)
export default store






