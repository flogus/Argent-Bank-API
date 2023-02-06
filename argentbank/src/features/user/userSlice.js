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
  reducers: {}
})

export default userSlice
