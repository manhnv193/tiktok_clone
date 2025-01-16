import { hover } from "@testing-library/user-event/dist/hover";
import { useState, useReducer, useRef } from "react";

// useState
// 1. Initial state: 0
// 2. Action: Up (state + 1), Down (state - 1)


// useReducer
// 1. Initial state: 0
// 2. Action: Up (state + 1), Down (state - 1)
// 3. Reducer
// 4. Dispatch: Kích hoạt

// 1. Initial state
const initiState = {
  job: '',
  jobs: []
}

// 2. Action
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload
  }
}

// 3. Reducer
const reducer = (state, action) => {
  let newState

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      newState = {
        ...state,
        jobs: state.jobs.filter((_, index) => index !== action.payload)
      }
      break
    default:
      throw new Error('Invalid action')
  }
  
  return newState
}

// 4. Dispatch: Kích hoạt

function App() {

  const [state, dispatch] = useReducer(reducer, initiState)

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
