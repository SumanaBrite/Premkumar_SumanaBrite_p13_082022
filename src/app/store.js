// import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
import { userReducer } from '../reducers/UserReducer'
import { loginReducer } from '../reducers/LoginReducer'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

const store = configureStore({
  reducer: {
    userLogin: loginReducer,
    userProfile: userReducer,
  }
})
// export const persistor = persistStore(store)
export default store
