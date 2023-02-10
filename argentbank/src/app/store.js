import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import transactionsReducer from '../features/transactions/transactionsSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer
  }
})
export default store
