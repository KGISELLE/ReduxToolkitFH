import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,      /*Para hacer paginacion */
        pokemons: [],
        isLoading: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setPokemons: (state, action ) => {
            //Aca estoy diciendo ok ya tengo los poquemos ahora deje de cargarlos
            state.isLoading = false;
            //Ahora para la paginacion, esperamos que en el payload 
            //se pase la pagina que estableci en el argumento de la fn getPokemon (Thunk)
            state.page = action.payload.page;
            //tambien esperamos que en el payload tambien pasemos los pokemos para esa page
            state.pokemons = action.payload.pokemons;
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
