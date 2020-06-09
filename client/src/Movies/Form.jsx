import React from 'react'


const Form = ({ form, handleEdit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' value={form.title} placeholder={form.title || 'Title'} />
      <input type='text' name='director' value={form.director} placeholder={form.title || 'Director'} />
      <input type='text' name='title' value={form.metascore} placeholder={form.title || 'Metascore'} />
      <input type='text' name='actors' value={form.actors} placeholder="Actors" />
      <input type='submit' />
    </form>
  )
}

export default Form
