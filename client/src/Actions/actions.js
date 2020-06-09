import axios from 'axios'

export const LOADING_DATA = 'LOADING_DATA'
export const LOAD_SUCCESS = 'LOAD_SUCCESS'
export const LOAD_FAIL = 'LOAD_FAIL'
export const EDIT_MOVIE = 'EDIT_MOVIE'

export const loadMovie = () => {
  const promise = axios.get("http://localhost:5000/api/movies")

  return dispatch => {
    dispatch({ type: LOADING_DATA })
    promise
      .then(res => {
        dispatch({ type: LOAD_SUCCESS, payload: res.data })
      })
      .catch(err => dispatch({ type: LOAD_FAIL, payload: err }))
  }
}

export const editMovie = id => {
  console.log(id)
  const promise = axios.put(`http://localhost:5000/api/movies/${id}`)
  return dispatch => {
    promise
      .then(res => console.log(res.data))
    // dispatch({ type: EDIT_MOVIE, payload: id })
  }

}