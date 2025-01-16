import { useState, useReducer, useRef } from "react";
import { addJob, deleteJob, setJob } from "./actions";
import reducer, { initiState } from "./reducer";
import logger from "./logger";

// useState
// 1. Initial state: 0
// 2. Action: Up (state + 1), Down (state - 1)


// useReducer
// 1. Initial state: 0
// 2. Action: Up (state + 1), Down (state - 1)
// 3. Reducer
// 4. Dispatch: Kích hoạt


function App() {

  const [state, dispatch] = useReducer(logger(reducer), initiState)

  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: '0px 20px' }}>
      <h2>To do</h2>
      <input
        type="text"
        ref={inputRef}
        value={job}
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span 
              onClick={() => dispatch(deleteJob(index))}
              style={{
                cursor: 'pointer',
              }}>
            &times;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
