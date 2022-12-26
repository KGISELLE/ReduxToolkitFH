import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApis = createApi({

    reducerPath: 'todos',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({

        getTodos: builder.query({
            query: () => '/todos' //en este caso le estoy concateneando la ruta URL
        })

    })

});

export const { useGetTodosQuery } = todosApis;