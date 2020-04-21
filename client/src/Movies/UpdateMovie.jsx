import React, { useState } from 'react'
import axios from 'axios'

export default function UpdateMovie(props) {
  const { title, director, metascore, stars, id } = props.location.movie !== undefined ? props.location.movie : '';

  const [updateMovie, setUpdateMovie] = useState();
  const [input, setInput] = useState(props.location.movie);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/movies/${id}`, input)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    setUpdateMovie(input)
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  console.log(updateMovie);

  return (
    <div>
      {props.location.movie !== undefined ?
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" name="title" placeholder="Title" onChange={e => handleChange(e)} value={input.title} />
          <input type="text" name="director" placeholder="Director" onChange={e => handleChange(e)} value={input.director} />
          <input type="number" name="metascore" placeholder="Metascore" onChange={e => handleChange(e)} value={input.metascore} />
          <input type="text" name="stars" placeholder="Stars" onChange={e => handleChange(e)} value={input.stars} />
          <input type="submit" />
        </form >
        : <h1>Pick a movie to update</h1>}
    </div >
  )
}
