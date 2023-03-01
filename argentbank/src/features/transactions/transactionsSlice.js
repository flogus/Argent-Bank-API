import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1000,
  title: 'Initial State',
  text: 'Initial Balance'
}
// const initialState = {
//   transac1: {
//     amount: 1000,
//     title: 'Initial State',
//     text: 'Initial Balance'
//   },
//   transac2: {
//     amount: 1000,
//     title: 'Initial State',
//     text: 'Initial Balance'
//   },
//   transac3: {
//     amount: 1000,
//     title: 'Initial State',
//     text: 'Initial Balance'
//   }
// }

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    initTransac (state) {
      state.amount = 3000
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
