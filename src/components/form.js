/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Form = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
