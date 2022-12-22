import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { pokemonSlice } from "./store/slices/Pokemon/pokemonSlice";

import { getPokemons } from "./store/slices/Pokemon/thunks,js";

export const PokemonApp = () => {

  //useDispatch lo necesitamos para crear un dispatch function que voy a usar para disparar cualquier accion, sin importar la pieza de estos que me interese
  const dispatch = useDispatch();
  
  //Paso 1 Tarea Mostrar Pokemons, desestructuramos el state de pokemons que tomamos
  //del store y del slice
  //Paso 6 Tarea Mostrar Pokemons, se puede colocar que pokemosn es igual a un string vacio solo para saber que es un arreglo
  //en caso que no encuentre ningun pokemon
  const { isloading, pokemons = [], page } = useSelector( state => state.pokemons);


  // Realizar una accion cuando el componente se crear solo la primera vez y solo una vez, usamos el useEffect

  //En este caso como ya esta guardado el dispatch no es necesario agregarlo como una dependencia[]
  useEffect(() => {
    //En este dispatch ponemos dentro de los parentesis que accion quiero disparar
    //Para este caso lo que quiero es disparar mis acciones asincronas "thunk"
    dispatch(getPokemons());
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        {/* Paso 2 Tarea Mostrar Pokemons,ponemos que si isLoading (viene del store) es true nos muestre "True" */}
        <span>Loading: { isloading ? 'True' : 'False' }</span>

        <ul>
          {/* Paso 5 Tarea Mostrar Pokemons, traemos los pokemons del store y le pasamos un metodo map
          para poder identificar cada pokemon y los mostraremos por medio de <li> mostrarmos el name
          que lo tomamos del objeto de los pokemons que llamamos del API */}
          {
            pokemons.map( ({ name }) =>(
              <li key={ name }>{ name }</li>
            ))
          }
        </ul>

        <button
          // Paso 3 Tarea Mostrar Pokemons, la propiedad disable del buton depende de isloading
          disable = { isloading }
          // Paso 4 Tarea Mostrar Pokemons, la propiedad onClick del button le enviamos 
          // como accion al realizar click ak boton, una funcion que envia al store por medio
          //del dispatch getPokemons la paginacion.
          onClick={ () => dispatch(getPokemons(page)) }
        >
          Next
        </button>
    </>
  )
}
