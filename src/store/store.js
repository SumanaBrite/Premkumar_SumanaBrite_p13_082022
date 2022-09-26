import { configureStore } from '@reduxjs/toolkit'

import { userReducer } from '../reducers/UserReducer'
import { loginReducer } from '../reducers/LoginReducer'

const store = configureStore({
  reducer: {
    userLogin: loginReducer,
    userProfile: userReducer,
  }
})
export default store
