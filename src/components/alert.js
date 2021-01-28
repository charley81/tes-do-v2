/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useEffect } from 'react'

const Alert = ({ removeAlert, type, text }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      css={css`
        text-align: center;

        .danger {
          color: var(--colorPrimary);
        }

        .success {
          color: green;
        }
      `}
    >
      <p className={`alert ${type}`}>{text}</p>
    </div>
  )
}

export default Alert
