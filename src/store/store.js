import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/Pokemon/pokemonSlice'; //Se agrego al llamar el pokemonSlice

import { todosApi } from './apis/todosApi';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, 
    //Esto ya puede venir con el reducer desde el slice y aqui no habria necesidad de colocar el .reducer
    pokemons: pokemonSlice.reducer, /* Agregar pokemonSlice al store */

    // Agregar el reducer generado como un slice especifico de alto nivel
    [todosApi.reducerPath]: todosApi.reducer,
  },

  // Agregar el middleware api permite el almacenamiento en caché, la invalidación, el sondeo,
  // y otras funciones útiles de `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
})