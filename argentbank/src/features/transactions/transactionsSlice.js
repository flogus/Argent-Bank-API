import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 2082.79,
  title: 'Checking (x8349)',
  text: 'Available Balance'
}

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    initTransac (state) {
      state.amount = '2082.79'
      state.title = 'Checking (x8349)'
      state.text = 'Available Balance'
    },
    addATransac (state) {},
    randomizeTransac (state) {}
  }
})

export const { initTransac, addATransac, randomizeTransac } =
  transactionSlice.actions
export default transactionSlice.reducer
