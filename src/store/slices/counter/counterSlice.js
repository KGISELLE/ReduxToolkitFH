import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 10,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1;
    },

    IncrementBy: (state, action) => {
      console.log(action, "action");
      state.value += action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, IncrementBy } = counterSlice.actions

// export default counterSlice.reducer //Esta fraccion de codigo es mas usado en el proyecto