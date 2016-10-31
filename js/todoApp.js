import React from 'react'
import ReactDOM from 'react-dom'
import TodoItemsComponent from '../components/TodoItemsComponent'

function renderView() {
  ReactDOM.render(
    <TodoItemsComponent />,
    document.querySelector('#todoApp')
  )
}

renderView()
