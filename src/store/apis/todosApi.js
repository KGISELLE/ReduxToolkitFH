import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos' //en este caso le estoy concateneando la ruta URL
        }),

        getTodoById: builder.query({ //con solo crear esto ya tengo el custom Hook, acordarse de exportarlo
            query: (todoId) => `/todos/${ todoId }` //aca la Url cambia segun el id del todo
        }),

    }),

});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi; //Exportando custom Hooks