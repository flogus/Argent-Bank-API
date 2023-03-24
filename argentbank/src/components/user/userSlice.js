import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    update: (state, param) => {
      const { payload } = param
      state.firstName = payload.firstName
      state.lastName = payload.lastName
    }
  }
})

export const { updateUser, update } = userSlice.actions
export default userSlice.reducer
