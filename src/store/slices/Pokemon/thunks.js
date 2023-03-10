import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// Funcion que regresa otra funcion o tarea asincrona
export const getPokemons = ( page = 0 ) => {
    // Esta funcion se manda a llamar con un argumento dispatch
    // Como segundo argumento llamanos la fn getState para llamar todo el rootState
    //Le coloca al return async para poder tener los beneficios del async y el await
    return async ( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: Realizar peticion HTTP
        //Colocar el endpoint de la API dentro de los parentesis y las comillas
        //Y como parte de la URL pegamos el detalle de la paginacion
        //como se controla la paginacion por medio del argumento page de la fn
        //cambiar las "" por template strings y agregar en el offset ${}
        //? const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        //? const data = await resp.json();

        //Aca en la peticion get solo colocar la parte de la URL que me hace falta es decir la que si cambia
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);

        dispatch( setPokemons({ pokemons: data.results, page: page + 1}) )

    }

}