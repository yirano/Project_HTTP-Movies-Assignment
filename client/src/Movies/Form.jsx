import React from 'react'
import { connect } from 'react-redux'


const Form = ({ initialForm, handleEdit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='title' value={initialForm.title} placeholder={initialForm.title || 'Title'} />
      <input type='text' name='director' value={initialForm.director} placeholder={initialForm.title || 'Director'} />
      <input type='text' name='title' value={initialForm.metascore} placeholder={initialForm.title || 'Metascore'} />
      <input type='text' name='actors' value={initialForm.actors} placeholder={initialForm.actors || "Actors"} />
      <input type='submit' />
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    initialForm: state.initialForm
  }
}

export default connect(mapStateToProps, {})(Form)
