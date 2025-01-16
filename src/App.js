import { useContext } from 'react'
import { StoreContext } from './store'

import './App.css';


function App() {

  const [state, dispatch] = useContext(StoreContext)

  console.log(state)

  return (
      <div style={{ padding: 20 }}>
        Hello AE
      </div>
  )
}

export default App;