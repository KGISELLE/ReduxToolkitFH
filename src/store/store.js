import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    //Esto ya puede venir con el reducer desde el slice y aqui no habria necesidad de colocar el .reducer
  },
})