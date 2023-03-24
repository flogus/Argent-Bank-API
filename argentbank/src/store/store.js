import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import transactionsReducer from './transactionsSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer
  }
})
export default store
