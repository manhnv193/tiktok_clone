const initState = {
    todos: [],
    todoInput: '',
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: state.todos.concat(action.payload),
                todoInput: '',
            }
        
        default:
            return state
    }
}

export { initState }
export default reducer