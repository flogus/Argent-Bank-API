import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: 'Gabriel',
  lastName: 'Jesus',
  email: 'gabriel@icloud.com',
  password: 'aaa'
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateUser (state) {
      state.firstName = 'Angus'
      state.lastName = 'Young'
      state.email = 'angus.young@acdc.com'
    },
    update: (state, param) => {
      const { payload } = param
      console.log('update payload', payload)
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.email = payload.email
      state.password = payload.password
    }
  }
})

export const { updateUser, update } = userSlice.actions
export default userSlice.reducer
