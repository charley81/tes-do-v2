import React, { useState, useEffect } from 'react'
import Alert from './alert'
import Form from './form'
import Header from './header'
import List from './list'

function App() {
  const [list, setList] = useState([])
  const [todo, setTodo] = useState('')
  const [editing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    text: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    if (!todo) {
      // show alert
      showAlert(true, 'danger', 'enter something before submitting')
    } else if (todo && editing) {
      // handle editing
    } else {
      // add item
      const newItem = { id: new Date().getTime().toString(), text: todo }
      setList([...list, newItem])
      setTodo('')
    }
  }

  const showAlert = (show = false, type = '', text = '') => {
    setAlert({ show, type, text })
  }

  return (
    <div>
      <Header />
      {alert.show && <Alert {...alert} alert={alert} removeAlert={showAlert} />}
      <List list={list} />
      <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
    </div>
  )
}

export default App
