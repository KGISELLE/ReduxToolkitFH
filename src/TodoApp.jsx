import { useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  //En este caso quiero renombrar la data en la desestructuracion y quiero
  //Que ahora se llame todos
  //Y le decimos que esa datoa es estado inicial es un arreglo vacio
  const { data: todos = [], isLoading } = useGetTodosQuery();

  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'True' : 'False' } </h4>

        <pre>...</pre>

        {/* Ahora voy a colocar todos los todos en en un orderList */}
        <ul>
          { todos.map( todo => (
            <li key={ todo.id }>
              <strong> { todo.completed ? 'DONE' : 'pending' } </strong>
              { todo.title }
            </li>
          )) }
        </ul>

        <button>
            Next Todo
        </button>
    </>
  )
}
