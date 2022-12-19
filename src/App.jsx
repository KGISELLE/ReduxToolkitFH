// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import reactLogo from './assets/react.svg'
import './App.css'
import { increment } from './store/slices/counter/counterSlice';

function App() {
  // const [count, setCount] = useState(0)

  //? Necesitamos leer algo de nuestro store
  //? Desestructurar algo que va ha venir del useSelector, en este caso estamos diciendo que del state tome todo el obj counter, y de ese objeto solo sacar el counter
  // const count = useSelector((state) => state.counter.value)
  const { value } = useSelector( state => state.counter );

  //? Ahora usamos el useDispatch para disparar una accion
  //? este dispatch me va a servir cuando hago click en el boton se dispara la ccion de incrementar el valor de count
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          count is { value }
        </button>
      </div>
    </div>
  )
}

export default App
