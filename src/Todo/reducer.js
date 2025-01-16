import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'


export const initiState = {
    job: '',
    jobs: []
  }


const reducer = (state, action) => {
  let newState

  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      return {
        ...state,
        jobs: state.jobs.filter((_, index) => index !== action.payload)
      }
    default:
      throw new Error('Invalid action')
  }
  
}

export default reducer