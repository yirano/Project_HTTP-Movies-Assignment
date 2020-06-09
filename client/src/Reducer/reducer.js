import { LOADING_DATA, LOAD_SUCCESS, EDIT_MOVIE } from '../Actions/actions'

const initialState = {
  movies: [],
  error: '',
  isLoading: false,
  initialForm: {
    title: '',
    director: '',
    metascore: '',
    actors: []
  }

}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_DATA:
      return { ...state, isLoading: true, initialForm: state.initialForm }
    case LOAD_SUCCESS:
      console.log("payload from reducer", payload)
      return { movies: payload, isLoading: false, error: '', initialForm: state.initialForm }
    case EDIT_MOVIE:
      return { ...state, initialForm: payload }
    default:
      return state
  }
}

