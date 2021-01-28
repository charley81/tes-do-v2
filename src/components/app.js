import React, { useState, useEffect } from 'react'
import Alert from './alert'
import Form from './form'
import Header from './header'
import List from './list'

const getLocalStorage = () => {
  const list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [list, setList] = useState(getLocalStorage())
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
      setList(
        list.map(item => {
          if (item.id === editId) {
            return { ...item, text: todo }
          }
          return item
        })
      )
      setTodo('')
      setEditing(false)
      setEditId(null)
    } else {
      // add item
      showAlert(true, 'success', 'item added')
      const newItem = { id: new Date().getTime().toString(), text: todo }
      setList([...list, newItem])
      setTodo('')
    }
  }

  const showAlert = (show = false, type = '', text = '') => {
    setAlert({ show, type, text })
  }

  const removeItem = id => {
    setList(list.filter(item => item.id !== id))
    showAlert(true, 'danger', 'item deleted')
  }

  const editItem = id => {
    const selectedItem = list.find(item => item.id === id)
    console.log(selectedItem)
    setEditId(id)
    setEditing(true)
    setTodo(selectedItem.text)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <div>
      <Header />
      <div className="container">
        {alert.show ? (
          <Alert {...alert} alert={alert} removeAlert={showAlert} />
        ) : (
          ''
        )}
        <List list={list} removeItem={removeItem} editItem={editItem} />
        <Form handleSubmit={handleSubmit} todo={todo} setTodo={setTodo} />
      </div>
    </div>
  )
}

export default App
