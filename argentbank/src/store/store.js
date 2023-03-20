import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/user/userSlice'
import transactionsReducer from '../components/transactions/transactionsSlice'
const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer
  }
})
export default store
