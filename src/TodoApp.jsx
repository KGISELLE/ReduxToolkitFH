import { useState } from 'react';
import { useGetTodosQuery, useGetTodoByIdQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  const [todoId, setTodoId ] = useState(1)

  //En este caso quiero renombrar la data en la desestructuracion y quiero
  //Que ahora se llame todos
  //Y le decimos que esa datoa es estado inicial es un arreglo vacio
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery( todoId );
  console.log(todo);

  //Creamos estas funcions para cambiar el useState del id del todo
  const nextTodo = () => {
    setTodoId( todoId + 1 );
  }

  const prevTodo = () => {
    if( todoId === 1) return;
    setTodoId( todoId - 1 );
  }

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>

        <pre>{ JSON.stringify( todo ) }</pre>
 
        <button onClick={ prevTodo }>
            Prev Todo
        </button>
        <button onClick={ nextTodo }>
            Next Todo
        </button>

        {/* Ahora voy a colocar todos los todos en en un orderList */}
        {/* <ul>
          { todos.map( todo => (
            <li key={ todo.id }>
              <strong> { todo.completed ? 'DONE' : 'pending' } </strong>
              { todo.title }
            </li>
          )) }
        </ul> */}

        
    </>
  )
}
