import React from 'react'

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
