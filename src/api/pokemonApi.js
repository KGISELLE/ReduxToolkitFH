import axios from "axios";

//Nos permite crear una instancia
//axios.create nos permite crear una configuracion estandar que 
//me ayuda a no tener que estar repitiendo codigo
export const pokemonApi = axios.create({
    //baseURL va ha ser igual a la parte del URl que va ha ser constante
    baseURL: 'https://pokeapi.co/api/v2/'
})