/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Form = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form
      onSubmit={handleSubmit}
      css={css`
        input {
          display: block;
          width: 100%;
          border: none;
          border-bottom: 1px solid var(--colorMid);
          background: transparent;
          font-family: var(--fontFamily);
          padding-bottom: 0.25rem;
        }

        button {
          display: block;
          width: 100%;
          border: none;
          margin: 1rem auto 0;
          font-family: var(--fontFamily);
          color: var(--colorSecondary);
          cursor: pointer;
          font-size: 1.1rem;
          transition: var(--transition);

          &:hover {
            color: var(--colorPrimary);
          }
        }
      `}
    >
      <input
        type="text"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        placeholder="Enter Something To Do"
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default Form
