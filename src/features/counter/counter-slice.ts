import { createSlice } from '@reduxjs/toolkit'

interface Counter {
  value: number
}

const initialState: Counter = {
  value: 0
}

export const counterSlice = createSlice({
  initialState,
  name: 'counterSlice',
  reducers: {
    increment(state) {
      state.value++
    },

    decrement(state) {
      state.value--
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
