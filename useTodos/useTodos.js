import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer"

const initialState = [];
const valorInicial = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, valorInicial)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: 'AddTodo',
            payload: todo
        }
        dispatchTodo(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'deleteTodo',
            payload: id
        }
        dispatchTodo(action)
    }
    const handlerToggleTodo = (id) => {
        const action = {
            type: 'todoDone',
            payload: id
        }
        dispatchTodo(action)
    }

    return {
        todosCount: todos.length,
        pendingTodos: todos.filter(t => !t.done).length,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handlerToggleTodo
    }
}
