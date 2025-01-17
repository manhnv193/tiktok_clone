import { useStore, actions } from './store'
import { useRef } from 'react'

import './App.css';


function App() {

  const [state, dispatch] = useStore()

  const { todos, todoInput } = state
  const inputRef = useRef()

  console.log('todoInput', todoInput)

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        value={todoInput}
        ref={inputRef}
        placeholder='Add todo'
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }
        }
      />
      <button
        onClick={handleAdd}
      >Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  )
}

export default App;