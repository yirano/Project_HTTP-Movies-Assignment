import { LOADING_DATA, LOAD_SUCCESS } from '../Actions/actions'

const initialState = {
  movies: [],
  error: '',
  isLoading: false

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DATA:
      return { ...state, isLoading: true }
    case LOAD_SUCCESS:
      console.log("payload from reducer", payload)
      return { movies: payload, isLoading: false, error: '' }
    default:
      return state
  }
}

