import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from './App';
// import { PokemonApp } from './PokemonApp'; //Importacion el componente
import { TodoApp } from './TodoApp';

import './index.css';

import { store } from './store/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodoApp />
    </Provider>
  </React.StrictMode>
)
