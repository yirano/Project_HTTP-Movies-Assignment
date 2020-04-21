import React from 'react'

export default function UpdateMovie(props) {
  const { title, director, metascore, stars, id } = props.location.movie !== undefined ? props.location.movie : '';

  return (
    <div>
      {props.location.movie !== undefined ?
        <form>
          <input type="text" name="movie" placeholder="Title" value={title} />
          <input type="text" name="director" placeholder="Director" value={director} />
          <input type="number" name="metascore" placeholder="Metascore" value={metascore} />
          <input type="text" name="stars" placeholder="Stars" value={stars} />
          <input type="submit" />
        </form >
        : <h1>Pick a movie to update</h1>}
    </div >
  )
}
