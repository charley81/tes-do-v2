/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

const List = ({ list }) => {
  return (
    <div
      css={css`
        .list-item {
          display: flex;
          justify-content: space-between;
        }
      `}
    >
      {list.map(item => {
        const { id, text } = item
        return (
          <div key={id} className="list-item">
            <p>{text}</p>
            <div className="icon-container">
              <button>
                <AiFillEdit />
              </button>
              <button>
                <AiFillDelete />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default List
