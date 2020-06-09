import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import { connect } from 'react-redux'
import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import Form from './Movies/Form'
import { loadMovie } from './Actions/actions'



const initialForm = {
  title: '',
  director: '',
  metascore: '',
  actors: []
}

const App = (props) => {
  const { movies, isLoading } = props
  const [savedList, setSavedList] = useState([])
  const [movieList, setMovieList] = useState(movies)
  const [form, setForm] = useState(initialForm)

  const handleEdit = e => {
    console.log('handleEdit clicked', e.target.id)
  }

  const handleSubmit = e => {
    e.preventDefault(0)
    console.log('handleSubmit clicked')
  }

  // const getMovieList = () => {
  //   axios
  //     .get("http://localhost:5000/api/movies")
  //     .then(res => setMovieList(res.data))
  //     .catch(err => console.log(err.response))
  // }

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  }

  useEffect(() => {
    // getMovieList()
    props.loadMovie()

  }, [])
  console.log(movies)
  return (
    <>
      {!isLoading ?
        <>
          <SavedList list={savedList} />
          <Form form={form} handleSubmit={handleSubmit} />
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route path="/movies/:id">
            <Movie addToSavedList={addToSavedList} handleEdit={handleEdit} />
          </Route>
        </>
        : <h1>Loading</h1>}
    </>
  )
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.isLoading
  }
}
export default connect(mapStateToProps, { loadMovie })(App)



