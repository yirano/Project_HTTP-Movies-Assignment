import React, { useState } from "react"
import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"
import Form from './Form'
import { connect } from 'react-redux'


function MovieList(props) {
  const { movies, handleEdit, isLoading } = props
  console.log("MovieList -> movies", movies)
  return (
    <div>
      {movies.length > 0 ?
        <div className="movie-list">
          {
            movies.map(movie => (
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                <MovieCard movie={movie} handleEdit={handleEdit} />
              </Link>
            ))
          }
        </div> : <h1>Is Loading</h1>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    isLoading: state.isLoading
  }
}

// export default MovieList
export default connect(mapStateToProps, {})(MovieList)
