import React, { useState, useEffect } from "react"
import { Route } from "react-router-dom"
import SavedList from "./Movies/SavedList"
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"
import Form from './Movies/Form'
import axios from 'axios'

const initialForm = {
  title: '',
  director: '',
  metascore: '',
  actors: []
}

const App = () => {
  const [savedList, setSavedList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [form, setForm] = useState(initialForm)

  const handleEdit = e => {
    console.log('handleEdit clicked')
  }

  const handleSubmit = e => {
    e.preventDefault(0)
    console.log('handleSubmit clicked')
  }

  const getMovieList = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(res => setMovieList(res.data))
      .catch(err => console.log(err.response))
  }

  const addToSavedList = movie => {
    setSavedList([...savedList, movie])
  }

  useEffect(() => {
    getMovieList()
  }, [])

  return (
    <>
      <SavedList list={savedList} />
      <Form form={form} handleSubmit={handleSubmit} />

      <Route exact path="/">
        <MovieList movies={movieList} handleEdit={handleEdit} />
      </Route>

      <Route path="/movies/:id">
        <Movie addToSavedList={addToSavedList} handleEdit={handleEdit} />
      </Route>
    </>
  )
}

export default App
