import React, { Component } from 'react'
import TodoItemComponent from './TodoItemComponent'

class TodoItemsComponent extends Component {
  constructor(props) {
    super(props)
    this.typing = this.typing.bind(this)
    this.enter = this.enter.bind(this)
    this.markDone = this.markDone.bind(this)
    this.updatedTodos = this.updatedTodos.bind(this)

    this.state = {
      newTodo: '',
      todos: []
    }
  }

  componentDidMount() {
    var localTodos = JSON.parse(localStorage.getItem('todos'))

    if (localTodos) {
      this.setState({
        todos: localTodos
      })
    }
  }

  typing(e) {
    this.setState({
      newTodo: e.target.value
    })
  }

  enter(e) {
    if (e.key === 'Enter' && e.target.value !== '') {
      let updatedTodos = this.state.todos

      updatedTodos.push({
        text: e.target.value,
        done: false
      })

      this.setState({
        newTodo: ''
      })

      this.updatedTodos(updatedTodos)
    }
  }

  markDone(currentTodoIndex) {
    let updatedTodos = this.state.todos

    // updatedTodos[currentTodoIndex].done = !updatedTodos[currentTodoIndex].done

    if (updatedTodos[currentTodoIndex].done === false) {
      updatedTodos[currentTodoIndex].done = true
    }
    else {
      updatedTodos[currentTodoIndex].done = false
    }

    this.updatedTodos(updatedTodos)
  }

  updatedTodos(updatedTodos) {
    this.setState({
      todos: updatedTodos
    })

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  render() {
    var todoListOfComponents = this.state.todos.map((todoItem, todoItemIndex) => {
        return <TodoItemComponent item={todoItem} key={todoItemIndex} markDone={() => this.markDone(todoItemIndex)} />
    })

    return <div>
      <input type="text" className="form-control" value={this.state.newTodo} onChange={this.typing} onKeyPress={this.enter} /><br />
      <ul className="list-group">
        {todoListOfComponents}
      </ul>
    </div>
  }
}

export default TodoItemsComponent
