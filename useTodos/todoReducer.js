// action {type: 'deleteTodo', payload: id}
export const todoReducer = (initialState = [], action) =>{
    switch (action.type) {
        case 'AddTodo':
            return [action.payload , ...initialState]
        case 'deleteTodo':
            return initialState.filter( todo => todo.id !== action.payload)
        case 'todoDone':
            return initialState.map( todo => {
                
                if(todo.id === action.payload){
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                }
                return todo
            })
        default:
            return initialState;
    }
}