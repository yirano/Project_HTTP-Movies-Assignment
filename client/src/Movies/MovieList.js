import React, { useState } from "react"
import { Link } from "react-router-dom"
import MovieCard from "./MovieCard"
import Form from './Form'


function MovieList({ movies, handleEdit }) {

  return (
    <div className="movie-list">
      {
        movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieCard movie={movie} handleEdit={handleEdit} />
          </Link>
        ))
      }
    </div>
  )
}

export default MovieList
