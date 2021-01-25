import React from 'react'

const List = ({ list }) => {
  return (
    <div>
      {list.map(item => {
        const { id, text } = item
        return <p key={id}>{text}</p>
      })}
    </div>
  )
}

export default List
