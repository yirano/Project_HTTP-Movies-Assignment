import React, { useState } from 'react'
import axios from 'axios'

export default function UpdateMovie(props) {
  const [input, setInput] = useState(props.location.movie);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://http-movies-assignment-a9udtygyw.now.sh/api/movies/${input.id}`, input)
      .then(res => {
        console.log(res)
        window.location = "/"
      })
      .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

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
