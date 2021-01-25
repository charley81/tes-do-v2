/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Header = () => {
  return (
    <header
      css={css`
        background-color: var(--colorPrimary);
        color: var(--colorLight);
        padding: 1rem;

        .title {
          max-width: var(--maxWidth);
          margin: auto;s
        }
      `}
    >
      <div className="title">
        <h1>tesDo_V2</h1>
      </div>
    </header>
  )
}

export default Header
