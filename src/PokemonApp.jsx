import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getPokemons } from "./store/slices/Pokemon/thunks,js";

export const PokemonApp = () => {

  //useDispatch lo necesitamos para crear un dispatch function que voy a usar para disparar cualquier accion, sin importar la pieza de estos que me interese
  const dispatch = useDispatch(); 

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

        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </>
  )
}
