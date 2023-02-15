import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Item from '../Item'
import '../List/index.css'



export default class List extends Component {
  // 对接收的props进行限制：类型，必要性的限制 
  //给接收的addtodo增加限制必须是func而且必填
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updatetodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }



  render() {
    const { todos, updatetodo, deleteTodo } = this.props
    // console.log(todos);
    return (
      <ul className="todo-main">
        {
          todos.map((todo) => {
            return <Item key={todo.id} {...todo} updatetodo={updatetodo} deleteTodo={deleteTodo} />
          })
        }
      </ul>
    )
  }
}
